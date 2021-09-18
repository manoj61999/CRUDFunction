import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  Logindata = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })
  login: any;
  UserLog: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit() {
  }

  LoginFunction(){
    console.log(this.Logindata.value);
  }



  LoginFun(){
    this.data.findUser(this.Logindata).subscribe((data: {})=> {
      console.log(data);
      this.login = data;
      this.UserLog = this.login.Result;
    })
  }



  RegisterUserFun(){
    this.router.navigate(['user'],{ queryParams: { Registration: 'CREATE USER'} });
  }

}
// this.router.navigate(['home']);