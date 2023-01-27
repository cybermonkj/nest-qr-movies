import { Controller, Get, Res } from '@nestjs/common';
import { ListMoviesComponent } from './listMovies.Component';
import { QRCode } from 'qrcode';
import { AppController } from '../app.controller';

@Controller('movies')
export class MoviesController {
    getRandomMovies: any;
    constructor(private  ListmoviesComponent: ListMoviesComponent) { }

    @Get('list')
    async displayMoviesList(@Res() res) {
        const movies = await this.getMovies();
        res.render('movies', {movies: this.ListmoviesComponent.getRandomMovies});
    }
    getMovies() {
        throw new Error('Method not implemented.');
    }
        //...
    @Get()
    async displayQRCode(@Res()res) {
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
