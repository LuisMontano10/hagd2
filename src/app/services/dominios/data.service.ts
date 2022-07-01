import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoApiResponse } from '@app/models/infoApi.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="https://api.publicapis.org/entries";

  constructor(private _http: HttpClient) { }

  getEntries():Observable<InfoApiResponse>{
    return this._http.get<InfoApiResponse>(this.url);
  }
}
