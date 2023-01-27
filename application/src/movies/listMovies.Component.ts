import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ListMoviesComponent {

  private allMovies: any;

  constructor() {
    this.allMovies = JSON.parse(fs.readFileSync('./movies.json', 'utf8'));
  }

  getRandomMovies(): any[] {
    let randomMovies = [];
    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * this.allMovies.length);
      randomMovies.push(this.allMovies[randomIndex]);
    }
    return randomMovies;
  }
}
