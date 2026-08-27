import { Injectable } from '@angular/core';
import moviesData from './movies-data.json'
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {
  private moviesData: Movie[] = moviesData;

  getMovies(): Movie[] {
    return this.moviesData;
  }

}
