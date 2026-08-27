import { Component, signal, inject } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { MoviesListService } from './movies-list.service';
import { Movie } from './movie';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, MovieComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('watch-before-you-die');

  moviesList: Movie[] = []
  moviesListService: MoviesListService = inject(MoviesListService)

  constructor() {
    this.moviesList = this.moviesListService.getMovies();
    console.log(this.moviesList)
  }
}
