import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
     MatInputModule,
     MatSnackBarModule,
     MatCardModule,
     MatDialogModule
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
     MatInputModule,
     MatSnackBarModule,
     MatCardModule,
     MatDialogModule
  ]
})
export class MaterialModule { }
