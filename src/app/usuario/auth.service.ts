import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  auth=0;

  isloggedIn(): boolean{

    if(this.auth==0){

      return false;

    }else{

      return true;

    }
  }



}


