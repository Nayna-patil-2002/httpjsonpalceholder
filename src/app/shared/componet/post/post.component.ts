import { Component, OnInit } from '@angular/core';
import { Iphoto } from '../../model/photo';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  photoArr:Array<Iphoto>=[]
  constructor(
    private _postService:PostService
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

}
