import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.html',
})
export class HeroSliderComponent {
  currentIndex = 0;

  slides = [
    {
      title: 'PlayStation 5',
      subtitle: 'Jogos incríveis. Experiências imersivas.',
      button: 'Saiba mais',
      image: 'assets/images/ps5-banner.jpg',
    },
    {
      title: 'PlayStation Plus',
      subtitle: 'Centenas de jogos para PS5 e PS4.',
      button: 'Conheça os planos',
      image: 'assets/images/saros-banner.jpg',
    },
    {
      title: 'Novos Jogos',
      subtitle: 'Descubra aventuras épicas e grandes lançamentos.',
      button: 'Ver jogos',
      image: 'assets/images/bat-banner.jpg',
    },
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}