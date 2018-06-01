import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

export interface User {
  name: string;
  login: string;
  usergroup: string;
}


const urlBase = "http://localhost:3000/searchUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http: HttpClient) { }

  loadUsers(name: string, login: string, usergroup: string ): Observable<User[]> {
    console.log("Params " + name + " " + login + " " + usergroup);
    var json = JSON.stringify({name, login, usergroup});
    console.log(json);
    return this.http.post<User[]>(urlBase, json, httpOptions);
  }

}
