import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'httpservice';

  isLoading:boolean=false;

  constructor(
    private _loader:LoaderService
  ){}
   
  loading$ = this._loader.LoadingStatusObj$;
  ngOnInit(): void {
    // this._loader.LoadingStatusObj$
    //  .subscribe(res=>{
    //   this.isLoading=res
    //  })

  
  }
}
