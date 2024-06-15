import { bootstrapApplication } from '@angular/platform-browser'
import { 
  InMemoryScrollingOptions, 
  provideRouter, 
  withInMemoryScrolling, 
  withViewTransitions 
} from '@angular/router'
import { AppComponent } from './app/app.component'
import { routes } from './app/app.routes'

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling(scrollConfig),
      withViewTransitions()
    )
  ]
}).catch(err => console.error(err))
