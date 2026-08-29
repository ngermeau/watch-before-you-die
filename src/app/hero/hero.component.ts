import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  isVisible = signal(true);

  toggleVisibility() {
    this.isVisible.update((value) => !value);
  }
}
