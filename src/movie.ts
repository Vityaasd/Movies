export class Movie {
    title: string;
    duration: number;
    genres: string[];
  
    constructor(title: string, duration: number, genres: string[]) {
      this.title = title;
      this.duration = duration;
      this.genres = genres;
    }
  }
  