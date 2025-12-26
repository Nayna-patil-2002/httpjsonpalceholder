import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TododashboardComponent } from "./shared/componet/tododashboard/tododashboard.component";
import { PostdashboardComponent } from "./shared/componet/postdashboard/postdashboard.component";
import { MovieDashoboardComponent } from "./shared/componet/movie-dashoboard/movie-dashoboard.component";
  

const appRoutes:Routes=[
  {
    path:"todo",
    component:TododashboardComponent
  },
  {
    path:"post",
    component:PostdashboardComponent
  },
  {
    path:"movie",
    component:MovieDashoboardComponent
  }
]


@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        
    ]
})


export class AppRoutingModule{

}