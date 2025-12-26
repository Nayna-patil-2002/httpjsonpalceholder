import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imovie, movieRef } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  Base_URl=`${environment.movie_Url}/posts.json`
 
  constructor(
    private _http:HttpClient
  ) { }

  fetchMovie():Observable<any>{
   return this._http.get<any>(this.Base_URl)
                .pipe(
                  map((data:movieRef)=>{
                    let postArr:Array<Imovie>=[]
                    for(const key in data){
                     postArr.push({
                      ...data[key],
                      id:key
                     })
                    }

                      return postArr
                  })

                
                )     
  }

  postMovie(movie:Imovie):Observable<any>{
   return this._http.post<any>(this.Base_URl, movie)
  }

  updatePost(movie:Imovie):Observable<Imovie>{
   const update_Url = `${environment.movie_Url}/posts/${movie.id}.json`;
   return this._http.patch<Imovie>(update_Url, movie)
  }
  

  removePost(movie: Imovie): Observable<any> {
  const remove_Url = `${environment.movie_Url}/posts/${movie.id}.json`;
  return this._http.delete<any>(remove_Url);
}
}
  