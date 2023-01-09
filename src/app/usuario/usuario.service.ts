import { Users } from './users';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http:HttpClient, private router: Router ) { }

  redirectUrl!: string;
  url: string = 'http://localhost/romani/';

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();


  createClient(client:any) {
    return this.http.post(this.url+'insert.php', client);
  }

  public login(email:any, senha:any){

    return this.http.post<any>(this.url + 'login.php', { email, senha } )
    .pipe(map(Users => {

      // console.log(Users.data[0].idUsuario);

      this.setToken(Users.data[0].idUsuario);
      this.setAcesso(Users.data[0].tipoUsuario);

      this.getLoggedInName.emit(true);

      return Users;
    }));

  }

// TOKEN

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  // NÍVEL DE ACESSO

  setAcesso(acesso: string){
    localStorage.setItem('acesso', acesso);
  }

  getAcesso(){
    return localStorage.getItem('acesso');
  }

  deleteAcesso(){
    localStorage.removeItem('acesso');
  }

  isLoggedIn(){

    const userToken = this.getToken();

    if(userToken != null){
      return true;
    }else{
      return false;

    }

  }

}
