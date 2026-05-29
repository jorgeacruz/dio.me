import { Component } from '@angular/core';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider';

@Component({
  selector: 'app-home',
  imports: [HeroSliderComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
