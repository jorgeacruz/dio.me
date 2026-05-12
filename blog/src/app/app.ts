import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from './components/menubar-component/menubar-component';
import { TitleComponent } from "./components/title-component/title-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarComponent, TitleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blog');
}
