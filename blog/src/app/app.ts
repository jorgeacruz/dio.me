import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
//components
import { MenubarComponent } from './components/menubar-component/menubar-component';
import { TitleComponent } from "./components/title-component/title-component";
import { BigcardComponent } from "./components/bigcard-component/bigcard-component";
import { SmallcardComponent } from "./components/smallcard-component/smallcard-component";
import { FooterComponent } from "./components/footer-component/footer-component";
import { VideoPlayer } from './components/video-player/video-player';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MenubarComponent,
    TitleComponent,
    BigcardComponent,
    SmallcardComponent,
    FooterComponent,
    VideoPlayer
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blog');
}
