import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {

  private films:Films[];

  constructor(private dataservice:DataService) {
  
  this.dataservice.getFilms().subscribe((res : any[])=>{
    this.films = res;
  });
  }
}
interface Films
{
  id:number,
  name:string;
}