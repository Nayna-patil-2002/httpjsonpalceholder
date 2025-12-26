import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Imovie } from '../../model/movie';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-movie-dashoboard',
  templateUrl: './movie-dashoboard.component.html',
  styleUrls: ['./movie-dashoboard.component.scss']
})
export class MovieDashoboardComponent implements OnInit {
 movieArr:Array<Imovie>=[]
  constructor(
    private _movieService:MovieService,
    private _matDiolog :MatDialog,
    private _snackabr:SnackbarService
  ) { }

  ngOnInit(): void {
   this.fetChAllmovie()
  }

  fetChAllmovie(){
   this._movieService.fetchMovie()
    .subscribe({
      next:res=>{
        console.log(res)
        this.movieArr=res
       this._snackabr.openSnackbar(`This Movies Fetched succesfully.`)

      },
      error:err=>{
        console.log(err)
      }
    })
  }

  openMovieForm(){
  let matDilogconfig = new MatDialogConfig
  matDilogconfig.width="600px"
  matDilogconfig.disableClose=true
  let matConfigRef= this._matDiolog.open(MovieFormComponent, matDilogconfig)
  matConfigRef.afterClosed()
    .subscribe({
      next:res=>{
      console.log(res)
      if(res){
          this.movieArr.unshift(res)
          this._snackabr.openSnackbar(`This ${res.title} addded succesfully.`)
      }
     
      }
    })
  }

  onMovieDelete(id:string){
   const index = this.movieArr.findIndex(m => m.id === id);
    this.movieArr.splice(index, 1);
    this._snackabr.openSnackbar(`This ${id} removed succesfully.`)
  
  }

}
