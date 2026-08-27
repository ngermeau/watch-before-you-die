export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  runningTime: string;
  trailerLink: string;
  thumbPath: string;
  categories: { name: string } [];
  imdbScore: number;
  synopsis: string;
}
