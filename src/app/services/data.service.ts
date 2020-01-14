import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {throwError} from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
  getFilms(){
    return this.http.get('https://my-json-server.typicode.com/Luqiii/test-db/films');
}
}
