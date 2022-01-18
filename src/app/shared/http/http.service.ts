import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class HttpService {

  //Firebass api URL
  private _fbAPI: string = 'https://watt-database-default-rtdb.firebaseio.com/';

  constructor(private _http: HttpClient) {}

  //Fetches data from the backend
  getData() {
    this._http.get(this._fbAPI + '')
  }
}
