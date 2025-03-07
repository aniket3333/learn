import { InjectionToken } from "@angular/core";
import { Movie } from "../models/movie.model";
import { Observable } from "rxjs";

export const MOVIE_SERVICE = new InjectionToken('movie service');
export interface Imovieservice{
   getMovieList():Observable<Movie>;
   addMovie(model:Movie):Observable<Movie>;
   getMovieById(id:number):Observable<Movie>;
   updateMovie(id:number,movie:Movie):Observable<Movie>;
   deleteMovie(id:number):Observable<string>;
}