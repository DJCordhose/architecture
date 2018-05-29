import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const urlBase = "http://localhost:3000";

export interface Message {
  message: string;
}

@Injectable({
  providedIn: "root"
})
export class GreetingService {
  constructor(private http: HttpClient) {}

  requestGreeting(name: string): Observable<Message> {
    const url = `${urlBase}/${name}`;
    return this.http.get<Message>(url);
  }
}
