import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdata = new FormGroup({
    name : new FormControl(''),
    age : new FormControl(''),
    rollno : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    phone : new FormControl('')
  })
  user: any;
  saveuser: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit() {
  }

  userdetails(){
    console.log(this.userdata.value);
  }




  UserDataFun(){
    this.data.addUser(this.userdata).subscribe((data: {})=>{
      console.log(data);
      this.user = data;
      this.saveuser = this.user.Result;
      
    })
  }

}
