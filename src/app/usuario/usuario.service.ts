import { Users } from './users';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http:HttpClient ) { }

  redirectUrl!: string;
  url: string = 'http://localhost/romani/';

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  


  createClient(client:any) {
    return this.http.post(this.url+'insert.php', client);
  }

  public login(email:any, senha:any){

    return this.http.post<any>(this.url + 'login.php', { email, senha } )
    .pipe(map(Users => {
      this.setToken(Users.id);
      this.getLoggedInName.emit(true);
      return Users;
    }));

  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    const userToken = this.getToken();

    if(userToken != null){
      return true;
    }

      return false;

  }

}
