import { Component } from '@angular/core'
import { Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({ name: 'description', content: 'Home page for Stock Management' })
  }

}
