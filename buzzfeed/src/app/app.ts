import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Spiner } from "./components/spiner/spiner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Spiner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  isLoadingState = signal<boolean>(false);
  
  ngOnInit() {
    this.fetchData();
  }
  
  fetchData() {
    this.isLoadingState.set(true);
    setTimeout(() =>{
      this.isLoadingState.set(false);
    }, 6000);
  }
  protected readonly title = signal('Start War - Quizz');
}
