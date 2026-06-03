import { Component } from '@angular/core';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider';
import { PicSlider } from '../../components/pic-slider/pic-slider';
import { SociaLinks } from '../../components/social-links/social-links';

@Component({
  selector: 'app-home',
  imports: [HeroSliderComponent, PicSlider, SociaLinks],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
