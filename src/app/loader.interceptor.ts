import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './shared/service/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private _laoderservice:LoaderService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._laoderservice.loadingStateEmitter(true)
    const reqClone=request.clone({
      setHeaders:{
        "auth" :"token Form LocalStorage",
        "content-type": "application/json"
      }
    })
    return next.handle(reqClone)
           .pipe(
             finalize(() => {
    Promise.resolve().then(() => {
      this._laoderservice.loadingStateEmitter(false);
    })
  })
           )
  } 

}
