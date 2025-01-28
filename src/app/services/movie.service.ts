import { Injectable } from '@angular/core';
import { Api } from '../const/Api.const';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Imovieservice } from './Imovies.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements Imovieservice {

  constructor(private _http:HttpClient) { }

  getMovieList(): Observable<Movie> {
    return this._http.get<Movie>(Api.GET_MOVIES_LIST);
  }

  addMovie(model: Movie): Observable<Movie> {
   return this._http.post<Movie>(Api.ADD_MOVIE,model); 
  }
  getMovieById(id: number): Observable<Movie> {
    return this._http.get<Movie>(`${Api.GET_MOVIE_BY_ID}/${id}`);
  }
  updateMovie(id: number, movie: Movie): Observable<Movie> {
    return this._http.put<Movie>(`${Api.UPDATE_MOVIE}/${id}`, movie);
  }
  deleteMovie(id:number):Observable<string>{
    // let params = new HttpParams()
    // .set('id',id)
    return this._http.delete<string>(`${Api.DELETE_MOVIE_BY_ID}/${id}`);
  }
}
