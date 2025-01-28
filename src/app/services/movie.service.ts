import { Injectable } from '@angular/core';
import { Api } from '../const/Api.const';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Imovieservice } from './Imovies.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements Imovieservice {

  constructor(private _http) { }

  getMovieList(): Observable<Movie> {
    return this._http.get(Api.GET_MOVIES_LIST);
  }
}
