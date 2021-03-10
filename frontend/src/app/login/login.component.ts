import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  regForm : FormGroup;
  // email : String = ""
  // password : String = ""

  // incorrect : String = "";
  

  constructor(
    private fb : FormBuilder,
    private us: UserService,
    private router:Router,
    
  ) { }

  createForm(){
    this.regForm = this.fb.group({
      
      email : ['', Validators.required ],
      password : ['',[Validators.required , Validators.minLength(5)]],
      
      
      

    })
   }

  ngOnInit(): void {
    this.createForm();
    // this.regForm.patchValue({
    //   email:'ahmed@gai'
    // });
  }

  loginAccount(user){
    console.log('called');
    let temp_email : String;
    let temp_password : String;
    temp_email = user.email;
    temp_password = user.password;
    // console.log(temp_email);
    // console.log(temp_password);

    let obj : any
    this.us.getUser(temp_email,temp_password)
    // .subscribe(data => {
    //   console.log('D0ne');
    //   console.log(data);
    //   if(data.password == user.password)
    //   {
    //     console.log('True');
    //     this.us.loggedIn.next(true);
    //     this.router.navigateByUrl('/home');
    //     this.us.saveLoginInfo(data);
    //   }
    //   else
    //   {
    //     alert("Incorrect Email or password");
    //   }

    // })


    // console.log("Back to login button");


  }

 

}
