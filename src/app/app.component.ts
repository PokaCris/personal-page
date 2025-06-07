import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { ExperienceComponent } from './experience/experience.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';

@Component({
  selector: 'app-root',
  imports: [ 
    HeaderComponent, 
    InfoComponent,
    ExperienceComponent,
    KnowledgeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-page';
}
