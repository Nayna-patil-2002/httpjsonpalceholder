import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../model/todo';
import { SnackbarService } from '../../service/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetcponfirmComponent } from '../getcponfirm/getcponfirm.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoArr:Array<Itodo>=[]
  constructor(
    private _todoService:TodoService,
    private _snackbar:SnackbarService,
    private _matDiolog:MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchTodo()
    // this.gettodo(id:number) 
    this.getSingletodo()
    this.onUpdate()
   }

  fetchTodo(){
    this._todoService.fetchAllTo()
    .subscribe({
      next:res=>{
        console.log(res)
        this.todoArr=res
      },
      error:err=>{
        console.log(err)
      }
    })
  }

  getSingletodo(){
   this._todoService.addTodo$
     .subscribe({
      next:res=>{
        console.log(res)
        this.todoArr.unshift(res)
        this._snackbar.openSnackbar(`This ${res.title} added succesfully.`)
      },
      error:err=>{
        console.log(err)
      }
     })
  }


  onRemove(id:number){
  let mat_config=new MatDialogConfig()
  mat_config.data=`Are you sure you want to remove this Todo?`
  mat_config.disableClose=true 
  let matConfig=this._matDiolog.open(GetcponfirmComponent, mat_config)

    matConfig.afterClosed()
    .subscribe({
      next:res=>{
        console.log(res)
        if(res){
          this._todoService.removeTodo(id) 
          .subscribe({
            next:res=>{
             console.log(res)
               let getIndex=this.todoArr.findIndex(t=>t.id===id) 
               this.todoArr.splice(getIndex, 1)
               this._snackbar.openSnackbar(`This ${id} removed succesfully.`)
             },
            error:err=>{
             console.log(err)
            }
          })
        }
      }
    })
   
  }


  onEdit(t:Itodo){
    this._todoService.editTodo$.next(t)
    console.log(t)
  }

  onUpdate(){
    this._todoService.updateTodo$
    .subscribe({
      next:res=>{
        console.log(res)
        let getIndex=this.todoArr.findIndex(t=>t.id===res.id)
        this.todoArr[getIndex]=res
        this._snackbar.openSnackbar(`This ${res.title} updated succesfully.`)
      },
      error:err=>{
        console.log(err)
      }  
      
    })





  }
   

}
