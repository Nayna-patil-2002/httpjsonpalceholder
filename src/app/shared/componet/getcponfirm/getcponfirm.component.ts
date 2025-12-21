import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getcponfirm',
  templateUrl: './getcponfirm.component.html',
  styleUrls: ['./getcponfirm.component.scss']
})
export class GetcponfirmComponent implements OnInit {
  msg!:string
  constructor(
    private _matConfig:MatDialogRef<GetcponfirmComponent>,
    @Inject(MAT_DIALOG_DATA) getMsg:string
  ) { 
    this.msg=getMsg
  }

  ngOnInit(): void {
  }

  onClose(flag:boolean){
    this._matConfig.close(flag)
  }

}
