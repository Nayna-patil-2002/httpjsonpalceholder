import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itodo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  Todo_url=`${environment.Base_Url}`


  addTodo$:Subject<Itodo>=new Subject<Itodo>()

  editTodo$:Subject<Itodo>=new Subject<Itodo>()

  updateTodo$:Subject<Itodo>=new Subject<Itodo>()
 
  constructor(
    private _http:HttpClient
  ) { }

  fetchAllTo():Observable<any>{
   return this._http.get<any>(this.Todo_url)
  }

  createTodo(todo:Itodo):Observable<any>{
   return this._http.post<any>(this.Todo_url, todo)
  }

  getSingleTodo(id: number): Observable<Itodo> {
  return this._http.get<Itodo>(`${this.Todo_url}/${id}`);
 }

 removeTodo(id:number):Observable<Itodo>{
    return this._http.delete<Itodo>(`${this.Todo_url}/${id}`);
 }

 updatedTodo(id: number, data: Partial<Itodo>): Observable<Itodo> {
  return this._http.patch<Itodo>(`${this.Todo_url}/${id}`, data);
}

}
