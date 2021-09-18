import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { FormGroup } from '@angular/forms';

//CREATE
export class user {
  name:String | undefined;
	age:Number | undefined;
  rollno:Number | undefined;
	email:String | undefined;
  password:String | undefined;
	phone:Number | undefined;
}

//FIND
export class Login {
  email : string | undefined;
  password : string | undefined;
}

//UPDATE
export class Update {
  email : string | undefined;
  age:Number | undefined;
  rollno : Number | undefined;
  phone : Number | undefined;
}

//READ
export class read {
  email:string | undefined;
}

//DELETE
export class deletedata {
  email: string | undefined;
}

//PRODUCT
export class product {
  productId:String | undefined;
	productname:String | undefined;
  EMPno:Number | undefined;
	email:String | undefined;
  mode:String | undefined;
	phone:Number | undefined;
}

//LOGIN PRODUCT
export class loginproduct {
  email : string | undefined;
  EMPno : string | undefined;
}

//READ PRODUCT
export class readproduct {
  email : string | undefined;
}

//UPDATE PRODUCT
export class updateproduct {
  "email":string | undefined;
  "phone":string | undefined;
  "productname": string | undefined;
}






@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint = 'http://localhost:8000';
  AddResult: any;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }





//display data formmongoDB (getdata)
getusers(): Observable<user> {
  return this.httpClient.get<user>(this.endPoint + '/api/ShowAll');
}













//adddata user.component.ts
addUser(data: FormGroup): Observable<user> {
    
  let senddata={
    "name":data.value.name,
	  "age":data.value.age,
    "rollno":data.value.rollno,
	  "email":data.value.email,
    "password":data.value.password,
	  "phone":data.value.phone
  }
  console.log(senddata,"USER DATA");
  return this.httpClient.post<user>(this.endPoint + '/api/user', JSON.stringify(senddata), this.httpHeader)
}

//finduser LoginUser.component.ts
findUser(data: FormGroup): Observable<Login> {

  let finddata = {
    "email":data.value.email,
    "password":data.value.password
  }
  console.log(finddata,"LOGIN USER");
  return this.httpClient.post<Login>(this.endPoint +'/api/userlogin',JSON.stringify(finddata), this.httpHeader)
}

//finddata UpdateUser.component.ts
Updateuser(data: FormGroup): Observable<Update> {

  let updatedata = {
    "email":data.value.email,
    "age":data.value.age,
    "rollno":data.value.rollno,
    "phone":data.value.phone
  }
  console.log(updatedata,"UPDATE USER");
  return this.httpClient.post<Update>(this.endPoint +'/api/Updateuser',JSON.stringify(updatedata), this.httpHeader)
}

//readdata findUser.component.ts
ReadUser(data: FormGroup): Observable<read> {

  let readdata = {
    "email":data.value.email
  }
  console.log(readdata,"READ USER");
  return this.httpClient.post<read>(this.endPoint +'/api/showUser',JSON.stringify(readdata),this.httpHeader)
}

//deletedata deleteuser.component.ts
DeleteUser(data: FormGroup): Observable<deletedata> {

  let deletedata = {
    "email":data.value.email
  }
  console.log(deletedata,"DELETE USER");
  return this.httpClient.post<deletedata>(this.endPoint +'/api/DeleteUser',JSON.stringify(deletedata), this.httpHeader)
}

//product product.component.ts
addproduct(data: FormGroup): Observable<product> {

  let savedata = {
    "productId":data.value.productId,
	  "productname":data.value.productname,
    "EMPno":data.value.EMPno,
	  "email":data.value.email,
    "mode":data.value.mode,
	  "phone":data.value.phone
  }
  console.log(savedata,"CREATE PRODUCT");
  return this.httpClient.post<product>(this.endPoint +'/api/Product',JSON.stringify(savedata), this.httpHeader)
}

//login product product.component.ts
findproduct(data: FormGroup): Observable<loginproduct> {

  let finddata = {
    "email":data.value.email,
    "EMPno":data.value.EMPno
  }
  console.log(finddata,"LOGIN PRODUCT");
  return this.httpClient.post<loginproduct>(this.endPoint +'/api/LoginProduct',JSON.stringify(finddata),this.httpHeader)
}

//read product product.component.ts
readproduct(data: FormGroup): Observable<readproduct> {

  let readdata = {
    "email":data.value.email
  }
  console.log(readdata,"READ PRODUCT");
  return this.httpClient.post<readproduct>(this.endPoint +'/api/ViewProduct',JSON.stringify(readdata), this.httpHeader)
}

//update product product.component.ts
UpdateProduct(data: FormGroup): Observable<updateproduct> {

  let updatedata = {
    "email":data.value.email,
    "phone":data.value.phone,
    "productname":data.value.productname
  }
  console.log(updatedata,"UPDATE PRODUCT");
  return this.httpClient.post<updateproduct>(this.endPoint +'/api/UpdateProduct',JSON.stringify(updatedata), this.httpHeader)
}
}
