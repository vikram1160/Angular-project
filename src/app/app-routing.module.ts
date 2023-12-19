import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './extra/home/home.component';
import { AboutComponent } from './extra/about/about.component';
import { UserModule } from './user/user.module';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"user",loadChildren:()=> import ('./user/user.module').then(xyz => xyz.UserModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
