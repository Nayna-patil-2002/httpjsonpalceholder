import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../model/todo';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
  todoForm!:FormGroup
  editObj!:Itodo
  isIneditMode:boolean=false
  constructor(
    private todoservice:TodoService,
    private snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
    this.createTodoForm()

    this.patchtodo()
  }

  createTodoForm(){
    this.todoForm=new FormGroup({
      title:new FormControl(null, [Validators.required])
    })
  }


  onTodoAdd(){
    if(this.todoForm.valid){
      let obj=this.todoForm.value
      this.todoservice.createTodo(obj)
         .subscribe({
          next:res=>{
            console.log(res)
            this.todoservice.addTodo$.next(res)
          },
          error:err=>{
            console.log(err)
          }
         })
      this.todoForm.reset()
      console.log(obj)
    }
  }

  patchtodo(){
    this.todoservice.editTodo$
    .subscribe({
      next:res=>{
        console.log(res)
        this.todoForm.patchValue(res)
        this.editObj=res
        this.isIneditMode=true
      },
      error:err=>{
        console.log(err)
      }
    })
  }

  onUpdate(){
   if(this.todoForm.valid) {
    this.todoservice.updatedTodo(
      this.editObj.id,
      this.todoForm.value
    ).subscribe({
      next: (res: Itodo) => {
        console.log(res);
        this.todoservice.updateTodo$.next(res);
        this.todoForm.reset();
        this.isIneditMode=false
      }
    });
  }
  }

}
