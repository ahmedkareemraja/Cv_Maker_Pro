import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  name : String = ""
  email : String = ""
  password : String = ""
  confirm : String = ""

  

  regForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private us: UserService,
    private router:Router
  ) { }

  createForm(){
    this.regForm = this.fb.group({
      name : ['',Validators.required],
      email : ['', Validators.required ],
      password : ['',[Validators.required , Validators.minLength(5)]],
      confirm :['',[Validators.required, Validators.minLength(5)]],
      
      

    })
   }

  ngOnInit(): void {
    this.createForm();
  }

  


  createAccount(user){
    console.log('called');
    if(user.password == user.confirm)
    {
      console.log('They are equal !!');
      let temp_name : String;
      let temp_email : String;
      let temp_password : String;
      temp_name = user.name;
      temp_email = user.email;
      temp_password = user.password;

      console.log(temp_name);
      console.log(temp_email);
      console.log(temp_password);

      this.us.addUser(temp_name,temp_email,temp_password);

      


      
      
      
      

    }
    else{
    
      alert("Passwords do not match");
    }
   
    

  }




}
