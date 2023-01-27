import { MoviesController } from './movies.controller';
import { ListMoviesComponent } from './listMovies.Component';
import { Module } from '@nestjs/common';
import { MoviesService } from './MoviesService';



@Module({
    imports: [],
    controllers: [MoviesController],
    providers: [ListMoviesComponent, MoviesService],
  })
  export class MoviesModule {}
  

