import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {
  //READ
  finduserdata = new FormGroup({
    email:new FormControl('')
  })
  read: any;
  userread: any;

  //DELETE
  deletedata = new FormGroup({
    email:new FormControl('')
  })
  constructor(private route : ActivatedRoute, private router : Router, private data : DataService) { }

  ngOnInit() {
  }

  //READ
  FindFunction(){
    console.log(this.finduserdata.value);
  }
  //DELETE 
  deleteFunction(){
    console.log(this.deletedata.value);
  }
  



//READ
correct = false;
wrong = false;

  finduserFun(){
    this.data.ReadUser(this.finduserdata).subscribe((data: {})=> {
      console.log(data);
      this.read = data;
      this.userread = this.read.Result;

      //condition. using *ngIf condition
      if(this.userread=="no record found"){
        this.correct=false;
        this.wrong=true;
      }else{
        this.correct=true;
        this.wrong = false;
      }
    })
  }

  //DELETE
  deleteuserFun(){
    this.data.DeleteUser(this.deletedata).subscribe((data: {})=> {
      console.log(data);
    })
  }

}
