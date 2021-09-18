import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  userdata = new FormGroup({
    name : new FormControl(''),
    age : new FormControl(''),
    rollno : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    phone : new FormControl('')
  })
  constructor(private route:ActivatedRoute, private router:Router, private data:DataService) { }

  ngOnInit() {
  }

  userdetails(){
    console.log(this.userdata.value);
  this.router.navigate(['showall'],{ queryParams: {
    name:this.userdata.value.name,
    age:this.userdata.value.age,
    rollno:this.userdata.value.rollno,
    email:this.userdata.value.email,
    password:this.userdata.value.password,
    phone:this.userdata.value.phone
  }});
  }
}

