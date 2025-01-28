import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movie/movies-list/movies-list.component';

const routes: Routes = [
  {path:'',redirectTo:'movie-list',pathMatch:'full'},
{path:'movie-list',component:MoviesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
