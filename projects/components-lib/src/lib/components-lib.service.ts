import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Show } from "./interface/show.interface";

@Injectable({
  providedIn: 'root'
})
export class ComponentsLibService {

  private readonly apiRoot = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) {}

  getShow(id: number): Observable<Show> {
    const url = `${this.apiRoot}/shows/${id}`;
    return this.http.get<Show>(url);
  }
}
