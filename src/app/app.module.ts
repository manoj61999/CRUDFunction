import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { LoginUserComponent } from './login-user/login-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FindUserComponent } from './find-user/find-user.component';
import { ShowalluserComponent } from './showalluser/showalluser.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginUserComponent,
    UpdateUserComponent,
    FindUserComponent,
    ShowalluserComponent,
    StudentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
