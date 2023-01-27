import { Controller, Get, Query, Inject } from '@nestjs/common';
import { qrcode } from 'qrcode';
import { ListMoviesComponent } from './movies/listMovies.Component';
import { MoviesService } from './movies/MoviesService';



@Controller()
export class AppController {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly moviesComponent: ListMoviesComponent
  ) {}

  
  @Get('qrcode')
  async generateQRCode(@Query() query: any) {
    const movies = this.moviesComponent.getRandomMovies();
    const link = `http://localhost:3000/movies/list?movies=${JSON.stringify(movies)}`;
    const qr = await qrcode.toDataURL(link);
    return { qrCode: qr, movies: movies };
  }

  @Get('/')
  async redirectToQRCode() {
    return 'redirect to qrcode';
  }
  @Get('movies/list')
  async getMovies() {
    const movies = await this.moviesService.getRandomMovies();
    return this.moviesComponent.getRandomMovies();
  }
}