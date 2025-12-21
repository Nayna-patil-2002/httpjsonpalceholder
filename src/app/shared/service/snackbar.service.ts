import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _matsnack:MatSnackBar
  ) { }

  private readonly matconfig:MatSnackBarConfig={
    duration:3000,
    horizontalPosition:"left",
    verticalPosition:'top'
  }

  openSnackbar(msg:string){
    this._matsnack.open(msg, "close", this.matconfig)
  }
}
