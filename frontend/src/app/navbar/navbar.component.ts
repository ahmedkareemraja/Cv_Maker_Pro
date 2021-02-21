import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {UserService} from '../user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor
  (
    private us: UserService,
    private router:Router
  ) { }

  isLoggedIn$ : Observable<boolean>;
  flag : boolean;
  

  ngOnInit(): void {
    // if (this.router.url == "http://localhost:4200/signup"){
    //   this.flag = false;
    // }
    // else{
    //   this.flag = true;
    // }
    // console.log('Navoninit');
    this.isLoggedIn$ = this.us.isLoggedIn;
  }

  logout(){
    this.us.logout();
    
  }

  signUpClick(){
    // this.flag = false;
  }

  loginClick(){
    // this.flag = true;
  }
  

   

}
