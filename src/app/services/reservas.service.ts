import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Reserves } from '../models/reserves';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor( private http:HttpClient ) { }

  url: string = 'http://localhost/romani/';

  getReserves() {
    return this.http.get<Reserves[]>(this.url+'view.php');
  }

  deleteReserve(id:any) {
    return this.http.delete(this.url+'delete.php?id='+id);
  }
}
