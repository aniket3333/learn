import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieForm } from 'src/app/models/movie-form';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm:MovieForm;
  submitted: boolean;
constructor(private router:Router){}

get f(){
  return this.movieForm.controls;
}
ngOnInit(): void {
 this.movieForm = new MovieForm();

}
submit()
{
  this.submitted=true;
  debugger
  if(this.movieForm.invalid)
  {
return;
  }

}
navigate()
{
  this.router.navigate(['/movie-list']);
}
}
