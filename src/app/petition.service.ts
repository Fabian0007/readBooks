import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PetitionService {

constructor(private http: Http) {
   }
   
   
   
sendAuthor(author:any): Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(JSON.stringify(author));
    return this.http.post("https://backend-fabian0007.c9users.io/api/authors", JSON.stringify(author), {headers: headers})
      .map(response => {
        return response.json().results;
      });
  }
}
