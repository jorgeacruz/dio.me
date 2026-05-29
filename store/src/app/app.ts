import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Menubar } from './components/menubar/menubar';
import { MenuSony } from "./components/menu-sony/menu-sony";
import { Loader } from "./components/loader/loader";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menubar, Home, MenuSony, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  isLoadingState = signal<boolean>(false);
  
  ngOnInit() {
    this.fetchData();
  }
  
  fetchData() {
    this.isLoadingState.set(true);
    setTimeout(() =>{
      this.isLoadingState.set(false);
    }, 3000);
  }

  protected readonly title = signal('PlayStation Store - clone');
}
