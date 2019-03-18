import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }
  getAlluserList(){
    let userList=[
      {"name":"Thomas Hardy",
       "emailid":"thomashardy@mail.com",
       "password":"123456",
       "phone":"1231231231",
       "address":"89 Chiaroscuro Rd, Portland, USA"
      },
      {"name":"Dominique Perrier",
       "emailid":"dominiqueperrier@mail.com",
       "password":"123456",
       "phone":"5555735111",
       "address":"Obere Str. 57, Berlin, Germany"
      },
      {"name":"Maria Anders",
       "emailid":"mariaanders@mail.com",
       "password":"123456",
       "phone":"5559931345",
       "address":"25, rue Lauriston, Paris, France"
      },
      {"name":"sriram",
       "emailid":"sriram@mail.com",
       "password":"123456",
       "phone":"9035669251",
       "address":"25, main road, Ayodhye, India"
      }
    ];
  return userList;
  }
}
