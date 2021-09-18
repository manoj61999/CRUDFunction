import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FindUserComponent } from './find-user/find-user.component';
import { ShowalluserComponent } from './showalluser/showalluser.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

   {path:'user',component:UserComponent},
   {path:'LoginUser',component:LoginUserComponent},
   {path:'updateUser',component:UpdateUserComponent},
   {path:'finduser',component:FindUserComponent},
   {path:'showall',component:ShowalluserComponent},
   {path:'student',component:StudentComponent},
   {path:'product',component:ProductComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
