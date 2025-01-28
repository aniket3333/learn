import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Movie } from "./movie.model";

export class MovieForm extends FormGroup{
    constructor(){
        super({
            id: new FormControl(0),
            title: new FormControl('',[Validators.required]),
            genre: new FormControl('',[Validators.required]),
            releaseDate: new FormControl('')
        })
    }

    getFormData():Movie
    {
let model = new Movie();
model.id = this.get('id')?.value ?? 0;
model.title = this.get('title')?.value ?? '';
model.genre = this.get('genre')?.value ?? '';
model.releaseDate = this.get('releaseDate')?.value ?? '';
return model;
    }

    setFormData(model:Movie)
    {
        debugger
        this.get('id')?.setValue(model.id ?? 0);
        this.get('title')?.setValue(model.title ?? '');
        this.get('genre')?.setValue(model.genre ?? '');
        this.get('releaseDate')?.setValue(model.releaseDate ?? '');
    }
}