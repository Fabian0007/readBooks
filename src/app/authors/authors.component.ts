import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PetitionService } from '../petition.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit{
  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      poster: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      biography: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      birthday: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      nationality: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
    });
  }
  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes
  constructor(private _fb: FormBuilder, private petitionService: PetitionService) { }
  
  save(model:any, isValid: boolean) {
    this.submitted = true; // set form submit to true
    this.petitionService.sendAuthor(model).subscribe(response => {
      try {
            console.log("response: "+response);
          }
          catch(err){
           console.log(err);
          }
      });
    }

}
