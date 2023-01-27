import { Controller, Get, Res } from '@nestjs/common';
import { ListMoviesComponent } from './listMovies.Component';
import { QRCode } from 'qrcode';
import { MoviesService } from './MoviesService';

@Controller('movies')
export class MoviesController {
    [x: string]: any;
    getRandomMovies: any;
    constructor(private  ListmoviesComponent: ListMoviesComponent, MoviesService: MoviesService) { }

    @Get('list')
    async displayMoviesList(@Res() res) {
        const movies = await this.getRandomMovies();
        res.render('movies', {movies: this.ListmoviesComponent.getRandomMovies});
    }

    @Get()
    async displayQRCode(@Res()res): Promise<void> {
        const movies = await this.getRandomMovies();
        const qr = new QRCode(JSON.stringify({movies}));
        const qr_svg = qr.svg();
        res.set('Content-Type', 'image/svg+xml');
        res.send(qr_svg);
        }




    // private async getMovies(): Promise<any[]> {
    //     // code to read the json file and return the list of movies
    // }
    
}
