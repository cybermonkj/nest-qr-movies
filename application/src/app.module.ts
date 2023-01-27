import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesService } from './movies/MoviesService';
import { ListMoviesComponent } from './movies/listMovies.Component';
import { QrCodeController } from './qrcode/qrCodeController';


@Module({
  imports: [],
  controllers: [AppController, QrCodeController],
  providers: [AppService, MoviesService, ListMoviesComponent],
})

export class AppModule {}
