import { Component, signal } from '@angular/core';
import { Loader } from './components/loader/loader';
import { RouterOutlet } from '@angular/router';
import { MenuSony } from "./components/menu-sony/menu-sony";
import { MenuBar } from "./components/menubar/menubar";
import { Footer } from "./components/footer/footer";
import { SociaLinks } from './components/social-links/social-links';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader, MenuSony, MenuBar, Footer, SociaLinks],
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
