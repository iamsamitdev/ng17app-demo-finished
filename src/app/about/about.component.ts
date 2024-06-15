import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({ name: 'description', content: 'About page for Stock Management' })
  }

}
