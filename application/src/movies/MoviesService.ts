import { Injectable } from '@nestjs/common';
// const moviesJson = require('./movies.json');
import moviesJson from "./movies.json";
// const movies = moviesJson;

@Injectable()
export class MoviesService {
  getRandomMovies() {
    const movies = moviesJson;
    const randomMovies = [];
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      randomMovies.push(movies[randomIndex]);
    }
    return randomMovies;
  }
}
