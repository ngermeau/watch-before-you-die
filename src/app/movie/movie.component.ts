import { Component,input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  movie = input.required<Movie>();
}
