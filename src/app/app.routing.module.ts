import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TododashboardComponent } from "./shared/componet/tododashboard/tododashboard.component";
import { PostdashboardComponent } from "./shared/componet/postdashboard/postdashboard.component";
  

const appRoutes:Routes=[
  {
    path:"todo",
    component:TododashboardComponent
  },
  {
    path:"post",
    component:PostdashboardComponent
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