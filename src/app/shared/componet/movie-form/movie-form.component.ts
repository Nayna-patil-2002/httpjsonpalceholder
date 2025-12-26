import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../../service/post.service';
import { MovieService } from '../../service/movie.service';
import { Imovie } from '../../model/movie';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
 movieForm!:FormGroup
 editObJ!:Imovie
 isIneditMode:boolean=false
  constructor(
  private matDilogRef:MatDialogRef<MovieFormComponent>,
  private _movieservice:MovieService,

  @Inject(MAT_DIALOG_DATA) movie:Imovie,
  
  ) { 
     this.creteMovieForm()
    console.log(movie)
    if(movie){
      this.movieForm.patchValue(movie)
      this.editObJ=movie
      this.isIneditMode=true
    }

  }

  ngOnInit(): void {
    // this.creteMovieForm()

  }

  creteMovieForm(){
   this.movieForm=new FormGroup({
    title:new FormControl(null, [Validators.required]),
    description:new FormControl(null, [Validators.required]),
    imgURL:new FormControl(null, [Validators.required]),
   })
  }

  onMovieform(){
   if(this.movieForm.valid){
    let obj={...this.movieForm.value}
    this._movieservice.postMovie(obj)
     .subscribe({
      next:res=>{
        console.log(res)
        this.matDilogRef.close({...obj, id:res.name})
        this.movieForm.reset()
      }
     })
   }
  }

  onClose(flag:boolean){
  this.matDilogRef.close(flag)
  }

  onUpdate(){
   if(this.movieForm.value){
    let updatwObj={...this.movieForm.value, id:this.editObJ.id}
    console.log(updatwObj)
    this._movieservice.updatePost(updatwObj)
      .subscribe({
        next:res=>{
          console.log(res)
          this.movieForm.reset()
          this.isIneditMode=false;
          this.matDilogRef.close(updatwObj)
        },
        error:err=>{
          console.log(err)
        }
      })
   }
  }

}
