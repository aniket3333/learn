import { Injectable } from '@angular/core';
import { Api } from '../const/Api.const';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Imovieservice } from './Imovies.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements Imovieservice {

  constructor(private _http:HttpClient) { }

  getMovieList(): Observable<Movie> {
    return this._http.get<Movie>(Api.GET_MOVIES_LIST);
  }
}
