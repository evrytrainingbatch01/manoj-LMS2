import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import {NgbModal,NgbModalConfig} from '@ng-bootstrap/ng-bootstrap'
import {FormsModule,FormGroup,FormControl,FormBuilder} from '@angular/forms';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[NgbModal,NgbModalConfig]
})
export class UserComponent implements OnInit {
localstgUserName;
localstgUserType;
localstgAdminStatus;
userList;
addUserFormData;
checkaddUserHtml=false;
userformdata;
userUpdatedFormdata;
selectedindex;
updatedUserObj;
  constructor(private userService:UserListService, private modalService: NgbModal,private FormBuilder:FormBuilder,private LocalStorageService:LocalStorageService) { }

  ngOnInit() {
  this.userList=this.userService.getAlluserList();
  this.getLocalstorage();
  this.addUserFormData=this.FormBuilder.group({
    name:[''],
    emailid:[''],
    password:[''],
    phone:[''],
    address:['']
})
  }
  getLocalstorage(){
    this.localstgUserName=this.LocalStorageService.retrieve("usertype");
    this.localstgUserType=this.LocalStorageService.retrieve("username");
    this.localstgAdminStatus=this.LocalStorageService.retrieve("admin");
  }
  backTotable(){
    this.checkaddUserHtml=false;
  }
  addUser(){
    this.checkaddUserHtml=true;
  }
  addUserSubmit(data){
    let addnewnUserObj=data.value;
    this.userList.push(addnewnUserObj);
    this.backTotable();

  }
  Edit(content,index) {
  this.modalService.open(content);
  this.selectedindex=index;
  this.userformdata=this.userList[index];
  this.userUpdatedFormdata=new FormGroup({
    name:new FormControl(this.userformdata.name),
    emailid: new FormControl(this.userformdata.emailid),
    password:new FormControl(this.userformdata.password),
    phone:new FormControl(this.userformdata.phone),
    address:new FormControl(this.userformdata.address)
    }) 
  }
  UpdateUser(event){
    let data=event.value;
    this.updatedUserObj =data;
    let k=this.selectedindex;
    for(let i=0;i<this.userList.length;i++){
      if(i==k){
        this.userList[i]=this.updatedUserObj;
        this.updatedUserObj={};
      }
    }
    this.backTotable();
  }

  DeleteUser(index){
    alert("Are you sure want to Delete this User");
    this.userList.splice(index,1);
  }
}
