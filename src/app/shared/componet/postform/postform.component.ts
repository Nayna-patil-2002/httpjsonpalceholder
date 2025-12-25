import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../service/post.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Iphoto } from '../../model/photo';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss']
})
export class PostformComponent implements OnInit {
  postForm!:FormGroup
  editPost!:Iphoto
  isIneditMode:boolean=false
  constructor(
    private _postservice:PostService,
    private _matDilogeRef:MatDialogRef<PostformComponent>,
    private _snackabar:SnackbarService,
    @Inject(MAT_DIALOG_DATA) postObj:Iphoto
  ) { 
    this.createPostForm()
    console.log(postObj)

    if(postObj){
      this.postForm.patchValue(postObj)
      this.editPost=postObj
      this.isIneditMode=true
    }

  }

  ngOnInit(): void {
    // this.createPostForm()
  }

  createPostForm(){
    
  this.postForm=new FormGroup({
     title:new FormControl(null, [Validators.required] ),
     body:new FormControl(null, [Validators.required]),
     userId:new FormControl(null, [Validators.required]),
  })
  }

  onpostAdd(){
  
    if(this.postForm.valid){
       let obj=this.postForm.value
       console.log(obj)
       this._postservice.cretePost(obj)
          .subscribe({
            next : res=>{
              console.log(res)
              this._matDilogeRef.close({...obj, id:res.id})
              
                
            },
            error:err=>{
              console.log(err)
            }
          })
    }
  }


  onUpdate(){
    if(this.postForm.valid){
      let updatedObj={...this.postForm.value, id:this.editPost.id}
       console.log(updatedObj)
       this._postservice.updatepost(updatedObj)
         .subscribe({
          next:res=>{
            console.log(res)
            this.postForm.reset()
            this.isIneditMode=false
            this._matDilogeRef.close(updatedObj)
          },
          error:err=>{
            console.log(err)
          }
         })
    }
  }

  onClose(flag:boolean){
    this._matDilogeRef.close(flag); 
  }

}
