import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieForm } from 'src/app/models/movie-form';
import { Imovieservice, MOVIE_SERVICE } from 'src/app/services/Imovies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm:MovieForm;
  submitted: boolean;
  movieId: number;
constructor(private router:Router,private activeroute:ActivatedRoute,@Inject(MOVIE_SERVICE) private  _movieservice:Imovieservice){}

get f(){
  return this.movieForm.controls;
}
ngOnInit(): void {
 this.movieForm = new MovieForm();


this.activeroute.queryParams.subscribe((params)=>{
      this.movieId = params['id'];
  
});

}

private getById(){
  this._movieservice.getMovieById(this.movieId).subscribe((response)=>{
this.movieForm.setFormData(response);
  });
}
submit()
{
  this.submitted=true;
  debugger
  if(this.movieForm.invalid)
  {
return;
  }
  let model = this.movieForm.getFormData();
  this._movieservice.addMovie(model).subscribe((response)=>{
console.log(response);
this.navigate();
  });

}
navigate()
{
  this.router.navigate(['/movie-list']);
}
}


