import { Injectable } from '@nestjs/common';

const moviesJson = require('../../movies.json');


@Injectable()
export class MoviesService {
  getRandomMovies() {
    const movies = moviesJson.movies;
    const randomMovies = [];
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      randomMovies.push(movies[randomIndex]);
    }
    return randomMovies;
  }
}
