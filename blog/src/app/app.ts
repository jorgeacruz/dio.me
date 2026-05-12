import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from './components/menubar-component/menubar-component';
import { TitleComponent } from "./components/title-component/title-component";
import { BigcardComponent } from "./components/bigcard-component/bigcard-component";
import { SmallcardComponent } from "./components/smallcard-component/smallcard-component";
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    MenubarComponent, 
    TitleComponent, 
    BigcardComponent,
    SmallcardComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blog');
}
