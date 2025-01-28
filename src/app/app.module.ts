import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviesListComponent } from './components/movie/movies-list/movies-list.component';
import { ProviderList } from './app-provider-register';
import {HttpClientModule} from '@angular/common/http';
import { AddMovieComponent } from './components/movie/add-movie/add-movie.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProviderList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
