import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  private loading$ = new BehaviorSubject<boolean>(false);

  LoadingStatusObj$:Observable<boolean>=this.loading$.asObservable()

  loadingStateEmitter(flag:boolean){
    this.loading$.next(flag)
  }


}
