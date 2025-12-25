import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
     MatInputModule,
     MatSnackBarModule,
     MatCardModule,
     MatDialogModule,
     MatIconModule,
     MatProgressSpinnerModule
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
     MatInputModule,
     MatSnackBarModule,
     MatCardModule,
     MatDialogModule,
     MatIconModule,
     MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
