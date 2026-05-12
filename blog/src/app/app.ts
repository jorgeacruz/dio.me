import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from './components/menubar-component/menubar-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blog');
}
