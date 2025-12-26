import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Imovie } from '../../model/movie';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { GetcponfirmComponent } from '../getcponfirm/getcponfirm.component';
import { MovieService } from '../../service/movie.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {
  @Input() movie!:Imovie
  @Output() deletd=new EventEmitter<string>()
  constructor(
    private _matDilog:MatDialog,
    private _movieSrvice:MovieService,
    private _snackabr:SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onEdit(){
    let matDilogConfig= new MatDialogConfig
     matDilogConfig.width="600px"
     matDilogConfig.disableClose=true
     matDilogConfig.data=this.movie
    let matDiloconfigref=this._matDilog.open(MovieFormComponent, matDilogConfig)
      matDiloconfigref.afterClosed()
         .subscribe({
          next:res=>{
            console.log(res)
          
            if(res){
              this.movie=res
              this._snackabr.openSnackbar(`This ${res.title} updated Succesfully.`)
            }
          }
         })

  }

  onRemove(movie:Imovie){
  let matConfig = new MatDialogConfig()
     matConfig.data=`Are you sure you want to remove this Movie?`
     matConfig.width="450px"
     let matDilogRef= this._matDilog.open(GetcponfirmComponent, matConfig)
     console.log(movie)
     matDilogRef.afterClosed()
        .subscribe({
          next:res=>{
            console.log(res)
            if(res){
              this._movieSrvice.removePost(movie)
                .subscribe(()=>{
                     this.deletd.emit(this.movie.id)
                })
            }
          }
        })
  }

}
