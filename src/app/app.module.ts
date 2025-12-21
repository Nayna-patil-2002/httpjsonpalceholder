import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './shared/componet/todo/todo.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TododashboardComponent } from './shared/componet/tododashboard/tododashboard.component';
import { TodoformComponent } from './shared/componet/todoform/todoform.component'
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostdashboardComponent } from './shared/componet/postdashboard/postdashboard.component';
import { PostComponent } from './shared/componet/post/post.component';
import { PostformComponent } from './shared/componet/postform/postform.component';
import { GetcponfirmComponent } from './shared/componet/getcponfirm/getcponfirm.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TododashboardComponent,
    TodoformComponent,
    PostdashboardComponent,
    PostComponent,
    PostformComponent,
    GetcponfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
