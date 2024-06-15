import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({ name: 'description', content: 'About page for Stock Management' })
  }

}
