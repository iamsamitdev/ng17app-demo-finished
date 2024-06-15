import { NgOptimizedImage } from '@angular/common'
import { Component, inject, ElementRef, ViewChild } from '@angular/core'
import { 
  ReactiveFormsModule, 
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms'

// SweetAlert2
import Swal from 'sweetalert2'

// Meta
import { Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // FormGroup
  loginForm!: FormGroup
  // สร้างตัวแปรไว้เช็คว่า submit form หรือยัง
  submitted = false
  // สำหรับซ่อนแสดง password
  hide = true

  // ตัวแปรไว้เก็บค่า input ที่กรอก
  userLogin = {
    "email": "",
    "password": ""
  }

  // สร้างตัวแปรไว้เก็บค่า input แรก
  @ViewChild('emailInput') emailInput!: ElementRef

  // Constructor
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private meta: Meta
  // ){
  // }

  // ใช้ inject แทนการใช้ constructor
  private formBuilder = inject(FormBuilder)
  private meta = inject(Meta)

  // ngOnInit
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.meta.addTag({ name: 'description', content: 'Login page for Stock Management' })
  }

  // Method to toggle password visibility
  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  submitLogin(){

    this.submitted = true

    // ถ้าฟอร์มไม่ถูกต้อง (Invalid)
    if(this.loginForm.invalid){
      return
    } else {
      this.userLogin.email = this.loginForm.value.email
      this.userLogin.password = this.loginForm.value.password

      if(this.userLogin.email == "admin@email.com" && this.userLogin.password == "123456"){
        // alert("Login Success")
        Swal.fire({
          title: 'เข้าสู่ระบบสำเร็จ',
          text: 'ยินดีต้อนรับเข้าสู่ระบบ Stock Management',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      } else {
        // alert("Login Fail")
        Swal.fire({
          title: 'มีข้อผิดพลาด',
          text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }

    }
  }

  resetForm(){
    this.submitted = false
    this.loginForm.reset()
    // ให้ focus ไปที่ input แรก
    this.emailInput.nativeElement.focus()
  }

}
