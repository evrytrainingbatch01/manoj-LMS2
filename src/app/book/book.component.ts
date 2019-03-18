import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BookListService } from '../book-list.service';
import {NgbModalConfig,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers:[NgbModalConfig,NgbModal]
})
export class BookComponent implements OnInit {
  localstgUserName;
  localstgUserType;
  localstgAdminStatus;
  bookList;
  bookUpdatedFormdata;
  bookformdata;
  newbookformdata;
  checkaddBookHtml=false;
  valuechange;
  selectedindex;
  updatedBookObj;
  selectedBookIndexForBuy;
  soldBookObj;
  Cartcounter=0;
  addBookFormData:FormGroup;
  constructor(private bookserveice: BookListService, config: NgbModalConfig,private LocalStorageService:LocalStorageService ,private modalService: NgbModal,private formbldr:FormBuilder) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
   }
  ngOnInit() {
  this.bookList=this.bookserveice.getAllBookList();
  this.getLocalstorage();
  this.addBookFormData=this.formbldr.group({
    bookName:[''],
    bookType: [''],
    bookAuthor:[''],
    bookPrice:[0],
    bookRating:[0]
  })
  }
  getLocalstorage(){
    this.localstgUserName=this.LocalStorageService.retrieve("usertype");
    this.localstgUserType=this.LocalStorageService.retrieve("username");
    this.localstgAdminStatus=this.LocalStorageService.retrieve("admin");
  }
  backTotable(){
    this.checkaddBookHtml=false;
    //this.valuechange.emit(this.checkaddBookHtml);
  }
  addBook(){
    this.checkaddBookHtml=true;
  }
  addBookSubmit(data){
    //alert(JSON.stringify(data.value))
    let addnewnbookObj=data.value;
    this.bookList.push(addnewnbookObj);
    this.backTotable();

  }
  Edit(content,index) {
  this.modalService.open(content);
  this.selectedindex=index;
  this.bookformdata=this.bookList[index];
  this.bookUpdatedFormdata=new FormGroup({
  bookName:new FormControl(this.bookformdata.bookName),
  bookType: new FormControl(this.bookformdata.bookType),
  bookAuthor:new FormControl(this.bookformdata.bookAuthor),
  bookPrice:new FormControl(this.bookformdata.bookPrice),
  bookRating:new FormControl(this.bookformdata.bookRating)
    }) 
  }
  UpdateBook(event){
    let data=event.value;
  //  alert(JSON.stringify(event.value));
  // console.log(event.value);
  this.updatedBookObj =data;
  let k=this.selectedindex;
  for(let i=0;i<this.bookList.length;i++){
    if(i==k){
      this.bookList[i]=this.updatedBookObj;
      this.updatedBookObj={};
    }
  }
  this.backTotable();
  }
 /*  Delete(Deletecontent){
    this.modalService.open(Deletecontent, { centered: true });
  } */
  DeleteBook(index){
    alert("Are you sure want to Delete this Book");
    this.bookList.splice(index,1);
  }
 
  // buy Book----------
  BuyBook(index){
    alert("Are you sure want to BUY this Book");
   // this.selectedBookIndexForBuy=index;
    let k=index;
    for(let i=0;i<this.bookList.length;i++){
      if(i==k){
        this.soldBookObj=this.bookList[i];
      }
    }
    alert(JSON.stringify(this.soldBookObj))
    this.bookList.splice(index,1);
  }
  AddToCart(index){
    alert(" Book added to Cart");
    this.Cartcounter=this.Cartcounter+1;
    this.bookList.splice(index,1);
  }
}
