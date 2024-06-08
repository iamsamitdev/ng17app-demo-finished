import { Component } from '@angular/core'
import { 
  ReactiveFormsModule, 
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms'

import { Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // FormGroup
  loginForm!: FormGroup
  // สร้างตัวแปรไว้เช็คว่า submit form หรือยัง
  submitted = false

  // ตัวแปรสำหรับผูกกับฟอร์ม
  userLogin = {
    "email": "",
    "password": ""
  }

  // Constructor
  constructor(
    private formBuilder: FormBuilder,
    private meta: Meta
  ){
  }

  // ngOnInit
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.meta.addTag({ name: 'description', content: 'Login page for Stock Management' })
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
        alert("Login Success")
      } else {
        alert("Login Fail")
      }

    }
  }

  resetForm(){
    this.submitted = false
    this.loginForm.reset()
  }

}
