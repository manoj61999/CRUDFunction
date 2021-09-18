import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productdata = new FormGroup({
    productId : new FormControl(''),
    productname : new FormControl(''),
    EMPno : new FormControl(''),
    email : new FormControl(''),
    mode : new FormControl(''),
    phone : new FormControl('')
  })
  pro: any;
  savepro: any;

  //LOGIN
  Logindata = new FormGroup({
    email : new FormControl(''),
    EMPno : new FormControl('')
  })
  login: any;
  loginpro: any;

  //READ PRODUCT
  readdata = new FormGroup({
    email : new FormControl('')
  })
  read: any;
  readpro: any;

  //UPDATE 
  updatedata = new FormGroup({
    email : new FormControl(''),
    phone : new FormControl(''),
    productname : new FormControl('')
  })
  update: any;
  updatepro: any;
  constructor(private route : ActivatedRoute, private router : Router, private data : DataService) { }

  ngOnInit() {
  }





  

  productFunction(){
    console.log(this.productdata.value);
  }
  LoginFunction(){
    console.log(this.Logindata.value);
  }
  readFunction(){
    console.log(this.readdata.value);
  }
  updateFunction(){
    console.log(this.updatedata.value);
  }







  productFun(){
    this.data.addproduct(this.productdata).subscribe((data: {})=> {
      console.log(data);
      this.pro = data;
      this.savepro = this.pro.Result;
    })
  }

  LoginFun(){
    this.data.findproduct(this.Logindata).subscribe((data: {})=> {
      console.log(data);
      this.login = data;
      this.loginpro = this.login.Result;
    })
  }

  correct = false;
  wrong =false;

  ReadproductFun(){
    this.data.readproduct(this.readdata).subscribe((data: {})=>{
      console.log(data);
      this.read = data;
      this.readpro = this.read.Result;

      //condition *ngIf
      if(this.readpro=="No Records"){
        this.correct=false;
        this.wrong=true;
      }else{
        this.correct=true;
        this.wrong=false;
      }
    })
  }

  updateproductFun(){
    this.data.UpdateProduct(this.updatedata).subscribe((data: {})=> {
      console.log(data);
      this.update = data;
      this.updatepro = this.update.Result;
    })
  }

}
