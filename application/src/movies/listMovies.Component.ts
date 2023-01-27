import { Injectable } from '@nestjs/common';

@Injectable()
export class ListMoviesComponent {

  private allMovies: any;
  
  constructor() {
    this.allMovies
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
