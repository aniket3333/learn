import { Component, Inject, OnInit } from '@angular/core';
import { Imovieservice, MOVIE_SERVICE } from 'src/app/services/Imovies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  constructor(@Inject(MOVIE_SERVICE) private  _movieservice:Imovieservice){}
ngOnInit(): void {
  debugger
  this.getAllMovies();
}

getAllMovies()
{
  debugger
  this._movieservice.getMovieList().subscribe((response)=>{
console.log(response);
  });
}
}
