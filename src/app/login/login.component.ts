import { Component, OnInit,AfterViewInit,Output,EventEmitter } from '@angular/core';
import{FormsModule,FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userList;
loginCredentials:FormGroup;
showLoginPage=true;
HideLoginPage=false;
  constructor(private userService:UserListService, private _Router:Router,private FormBuilder:FormBuilder ,private LocalStorageService:LocalStorageService) { }

  ngOnInit() {
    this.userList=this.userService.getAlluserList();
    this.loginCredentials=this.FormBuilder.group({
      uname:['',Validators.required],
      password:['']
    })
  }
  ngAfterViewInit(){

  }
LoginUserSubmit(data){
let Userdata=data.value;
if(Userdata.uname==="manoj" && Userdata.password==="manoj@123"){
  this.LocalStorageService.store("username",Userdata.uname);
  this.LocalStorageService.store("usertype",1);
  this.LocalStorageService.store("admin",true)
 // this.LocalStorageService.store("password","Userdata.password");
  this._Router.navigate(['/User']);
}else{
  for(let i=0; i<this.userList.length;i++){
    if(Userdata.uname===this.userList[i].name && Userdata.password==this.userList[i].password){
      this.LocalStorageService.store("username",Userdata.uname);
      this.LocalStorageService.store("usertype",2);
      this.LocalStorageService.store("admin",false);
      this._Router.navigate(['/Book']);
    }

  }
}

  }

}
