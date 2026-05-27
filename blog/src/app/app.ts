import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
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
export class App implements OnInit { // Adicionada a implementação da interface OnInit

  // Correção: Transformado em um Signal para reatividade correta
  isLoadingState = signal<boolean>(false);
  protected readonly title = signal('blog');

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    // Altera o valor do signal para true
    this.isLoadingState.set(true);
    
    // Simula uma chamada de API de 3 segundos
    setTimeout(() => {
      // Altera o valor do signal para false (esconde o spinner)
      this.isLoadingState.set(false);
    }, 3000);
  }
}
