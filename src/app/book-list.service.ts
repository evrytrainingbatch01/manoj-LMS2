import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  constructor() { }
  getAllBookList(){
    let books:Array<Object> = [
      {id: 1, bookName: 'book1',bookType:'Generalities',bookAuthor:'manoj',bookPrice:100,bookRating:5},
      {id: 2, bookName: 'book2',bookType:'Religion',bookAuthor:'raja',bookPrice:200,bookRating:3},
      {id: 3, bookName: 'book3',bookType:'Natural Science',bookAuthor:'sahoo',bookPrice:300,bookRating:3.5},
      {id: 4, bookName: 'book4',bookType:'Literature',bookAuthor:'neeraj',bookPrice:400,bookRating:4},
  ];
    return books;
  }
}
