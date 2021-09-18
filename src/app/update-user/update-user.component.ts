import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updatedata = new FormGroup({
    email: new FormControl(''),
    age: new FormControl(''),
    rollno : new FormControl(''),
    phone: new FormControl('')
  })
  update: any;
  userupdate: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit() {
  }

  updateFunction(){
    console.log(this.updatedata.value);
  }



  updateFun(){
    this.data.Updateuser(this.updatedata).subscribe((data: {})=>{
      console.log(data);
      this.update = data;
      this.userupdate = this.update.Result;
    })
  }

}
