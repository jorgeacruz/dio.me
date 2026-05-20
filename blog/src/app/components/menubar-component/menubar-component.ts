import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-menubar-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menubar-component.html',
  styleUrl: './menubar-component.css',
})
export class MenubarComponent {

   isDark = false;

  ngOnInit(): void {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {

      this.isDark = true;

      document.documentElement.classList.add('dark');

    }

  }

  toggleTheme() {

    this.isDark = !this.isDark;

    if (this.isDark) {

      document.documentElement.classList.add('dark');

      localStorage.setItem('theme', 'dark');

    } else {

      document.documentElement.classList.remove('dark');

      localStorage.setItem('theme', 'light');

    }

    alert('teste')

  }
}
