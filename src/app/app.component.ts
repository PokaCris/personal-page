import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoAboutComponent } from './info-about/info-about.component';

@Component({
  selector: 'app-root',
  imports: [InfoAboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-page';
}
