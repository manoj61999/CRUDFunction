import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-showalluser',
  templateUrl: './showalluser.component.html',
  styleUrls: ['./showalluser.component.css']
})
export class ShowalluserComponent implements OnInit {
  Users: any;
  finduser: any;
  orderby: any;

  constructor(private route : ActivatedRoute, private router : Router, private data : DataService) { }

  

  ngOnInit() {
    this.fetchUser()

    //query params
    this.route.queryParams.subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.orderby = params;
      console.log(this.orderby); // price
    });
  }

  correct = false;
  wrong = false;

  fetchUser(){
    return this.data.getusers().subscribe((items:any)=> {
      console.log(items);
      this.Users = items;
      this.finduser =this.Users.Result;

      //condition
      if(this.finduser=="no records found"){
        this.correct=false;
        this.wrong=true;
      }else{
        this.correct=true;
        this.wrong=false;
      }
  })
}
}
