import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './shared/componet/todo/todo.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TododashboardComponent } from './shared/componet/tododashboard/tododashboard.component';
import { TodoformComponent } from './shared/componet/todoform/todoform.component'
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostdashboardComponent } from './shared/componet/postdashboard/postdashboard.component';
import { PostComponent } from './shared/componet/post/post.component';
import { PostformComponent } from './shared/componet/postform/postform.component';
import { GetcponfirmComponent } from './shared/componet/getcponfirm/getcponfirm.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './shared/componet/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoaderInterceptor } from './loader.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TododashboardComponent,
    TodoformComponent,
    PostdashboardComponent,
    PostComponent,
    PostformComponent,
    GetcponfirmComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule 
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
