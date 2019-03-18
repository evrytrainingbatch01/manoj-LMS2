import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component'
import { UserListService } from './user-list.service';
import { BookListService } from './book-list.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SoldBookComponent } from './sold-book/sold-book.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    HomePageComponent,
    SoldBookComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [UserListService,BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
