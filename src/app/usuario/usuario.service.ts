import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http:HttpClient ) { }

  url: string = 'http://localhost/romani/';

  createClient(client:any) {
    return this.http.post(this.url+'insert.php', client);
  }

}
