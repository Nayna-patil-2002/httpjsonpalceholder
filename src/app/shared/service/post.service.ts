import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iphoto } from '../model/photo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  Base_url=`${environment.photo_Url}`
  constructor(
    private _http:HttpClient
  ) { }

  fetChAllphotos():Observable<Iphoto[]>{
  return this._http.get<any>(this.Base_url)
  }
}
