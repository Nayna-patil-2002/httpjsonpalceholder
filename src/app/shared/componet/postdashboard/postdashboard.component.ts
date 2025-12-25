import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostformComponent } from '../postform/postform.component';
import { Iphoto } from '../../model/photo';
import { PostService } from '../../service/post.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-postdashboard',
  templateUrl: './postdashboard.component.html',
  styleUrls: ['./postdashboard.component.scss']
})
export class PostdashboardComponent implements OnInit {
  photoArr:Array<Iphoto>=[]
  constructor(
    private _matDiloug:MatDialog,
    private _postService:PostService,
    private _snackabar:SnackbarService
  ) { }

  ngOnInit(): void {
   this.fetChPhoto()
  }

  fetChPhoto(){
    this._postService.fetChAllphotos()
    .subscribe({
     next:res=>{
       console.log(res)
       this.photoArr=res


     },
     error:err=>{
       console.log(err)
     }
    })
   }

  onForm(){
    
  const matConfig=new MatDialogConfig
    matConfig.width="600px"
    matConfig.disableClose=true
    let MatDiologRef=this._matDiloug.open(PostformComponent, matConfig)
   
    MatDiologRef.afterClosed()
       .subscribe({
          next:res=>{
            console.log(res)

            if(res){
                 this.photoArr.unshift(res)
            this._snackabar.openSnackbar(`This ${res.title} added succesfully.`)
            }
           
          }
       })

  }

}
