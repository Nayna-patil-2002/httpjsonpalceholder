import { Component, Input, OnInit } from '@angular/core';
import { Iphoto } from '../../model/photo';
import { PostService } from '../../service/post.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PostformComponent } from '../postform/postform.component';
import { GetcponfirmComponent } from '../getcponfirm/getcponfirm.component';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  // photoArr:Array<Iphoto>=[]

  @Input() postObj!:Array<Iphoto>
  constructor(
    private _postService:PostService,
    private _matDiolog:MatDialog,
    private _snackabar:SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onEdit(photo:Iphoto){
     let matConfig=new MatDialogConfig()
     matConfig.width="600px"
     matConfig.data=photo  
    let matDilogRef= this._matDiolog.open(PostformComponent, matConfig) 
    matDilogRef.afterClosed()
    .subscribe(res=>{
       let getIndex=this.postObj.findIndex(p=>p.id===res.id)
        this.postObj[getIndex]=res
        this._snackabar.openSnackbar(`This ${res.title} updated succesfully.`)
    })
  }

  onRemove(photo:Iphoto){
     let Matconfig=new MatDialogConfig()
     Matconfig.data="Are you sure you want to remove this Post?"
     Matconfig.disableClose=true
    
     let matDiolref=this._matDiolog.open(GetcponfirmComponent, Matconfig)
     console.log(photo)
     matDiolref.afterClosed()
     .subscribe({
      next:res=>{
        console.log(res)
        if(res){
          this._postService.removePost(photo)
          .subscribe(() => {

            let index = this.postObj.findIndex(p => p.id === photo.id);

            if(index > -1){
              this.postObj.splice(index, 1);
            }
            this._snackabar.openSnackbar(`This ${photo.title} removed succesfully.`)
           })
        }
      },
      error:err=>{
        console.log(err)
      }
     })
  }
  

}
