import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movie/movies-list/movies-list.component';
import { AddMovieComponent } from './components/movie/add-movie/add-movie.component';

const routes: Routes = [
  {path:'',redirectTo:'movie-list',pathMatch:'full'},
{path:'movie-list',component:MoviesListComponent},
{path:'add-movie',component:AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
