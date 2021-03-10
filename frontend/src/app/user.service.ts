import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  post_user_url = "http://localhost:8080/addUser";
  get_user_url = "http://localhost:8080/login"

  post_cv_url ="http://localhost:8080/addCV"
  get_cv_url = "http://localhost:8080/cv/all/"
  delete_cv_url = "http://localhost:8080/delete/"
  download_cv_url = "http://localhost:8080/download"


  loginEmail = "";
  loginStatus : Boolean = false;

  public loggedIn = new BehaviorSubject<boolean>(false);

  
  

  // loginName = "";
  // loginPassword = "";
  

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }


                              // USER INFO

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }                              

  logout(){
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

   //Saving logged in user info
   saveLoginInfo(data){
    console.log("Inside login info");
    console.log(data.email);
    this.loginEmail = data.email;
    this.loginStatus = true;
    
  }


  //Get login Status
  getLoginStatus(){
    //return this.loginStatus;
    if(this.loginStatus == true){
      this.loggedIn.next(true);
    }
  }
  //Get loginEmail
  getLoginEmail(){
    console.log("getloginEmailCalled");
    // console.log(this.loginEmail);
    return this.loginEmail;
  }
                                    //LOGIN/SINGUP
  

  //LoginUser
    getUser(email,password) : any{
    // .subscribe((res) => console.log('Done'));
    console.log("INside get User");
    console.log(email);
    console.log(password);
    let obj : any
    // this.loggedIn.next(true);
    
    // return this.http.get<any>(this.get_user_url+email);
    obj = {
      email,
      password
    }

    // const headers =new  HttpHeaders({Authorization: 'Basic'+btoa(email+":"+password) });
    // this.http.get(this.get_user_url,{headers})
    // .subscribe((res)=>{
    //   alert(res);
    //   if(res == true){
    //     console.log("YESSS");
    //   }
    //   else
    //   {
    //     console.log("NOO");
    //   }
    // },
    // (err)=>{
    //   // alert(err);
    //   alert("ERROR ");
    //   alert(err);
    // }
    // )
    this.http.post(this.get_user_url,obj)
    .subscribe(

      (res)=>{
        alert(res);
      if(res == true){
        this.loggedIn.next(true);
        this.loginEmail = email;
        alert("Login Successful");
        this.router.navigateByUrl('/home');
      }
      else
      {
        alert("Incorrect email or password");
      }
      
     },
      (err) =>{
        alert(err);
      }

    )

    
    
  }

  //SignUp User
  addUser(name, email, password){
    console.log('addUsercalled');
    const obj = {
      name,
      email,
      password
    };



    console.log(obj);
    this.http.post(this.post_user_url,obj)
    .subscribe(
    (res) => 
    {
      console.log('Done');
      this.loggedIn.next(true);
      this.router.navigateByUrl('/home');
    },
    (err) =>{
      alert(err);
    }
    
    );
  } 
}
