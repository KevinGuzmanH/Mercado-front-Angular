import { Injectable } from '@angular/core';

const TOKEN_KEY = "AuthToken";
const USERNAME_KEY = 'AuthUsername';
const Authorities_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class ServTknService {
  roles: Array<string> = [];
  constructor() { }

  public setToken(token: string): void{
     window.sessionStorage.removeItem(TOKEN_KEY);
     window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string{
     return sessionStorage.getItem(TOKEN_KEY);
  }
  public setUserName(userName: string): void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }
  public getUserName(): string{
    return sessionStorage.getItem(USERNAME_KEY;
  }
  public setAuthorities(authorities: string[]): void{
    window.sessionStorage.removeItem(Authorities_KEY);
    window.sessionStorage.setItem(Authorities_KEY, JSON.stringify(authorities));
  }
  public getAuthorities(): string[]{
    if (sessionStorage.getItem(Authorities_KEY)){
      JSON.parse(sessionStorage.getItem(Authorities_KEY)).forEach(auth =>
                                                                  this.roles.push(auth.auth)
                                                                  )
    }
    return this.roles;
  }
  public logOut():void {
      window.sessionStorage.clear();
  }

}
