import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//components
import { MenubarComponent } from './components/menubar-component/menubar-component';
import { TitleComponent } from "./components/title-component/title-component";
import { FooterComponent } from "./components/footer-component/footer-component";

import { LoadingSpinner } from './components/loading-spinner/loading-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenubarComponent,
    TitleComponent,
    FooterComponent,
    LoadingSpinner
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  isLoadingState = false;

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.isLoadingState = true;
    
    // Simulating an API call or background operation
    setTimeout(() => {
      this.isLoadingState = false;
    }, 3000);
  }

  protected readonly title = signal('blog');
}
