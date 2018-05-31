import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Menues {
  menues: string[];
}

const urlBase = "http://localhost:3000/menues";

@Injectable({
  providedIn: "root"
})
export class NavigationService {
  constructor(private http: HttpClient) {}

  loadNavigation(name: string): Observable<Menues> {
    const url = `${urlBase}/${name}`;
    return this.http.get<Menues>(url);
  }

}
