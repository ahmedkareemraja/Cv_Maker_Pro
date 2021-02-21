import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  post_user_url = "http://localhost:8080/addUser";
  get_user_url = "http://localhost:8080/user/"
  post_cv_url ="http://localhost:8080/addCV"
  get_cv_url = "http://localhost:8080/cv/all/"
  delete_cv_url = "http://localhost:8080/delete/"
  download_cv_url = "http://localhost:8080/download"


  loginEmail = "ahmed@gmail.com";
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
    return this.loginStatus;
  }
  //Get loginEmail
  getLoginEmail(){
    console.log("getloginEmailCalled");
    // console.log(this.loginEmail);
    return this.loginEmail;
  }

  

                              //CV OPERATIONS
  //download cv
  downloadCV(cv){
    console.log("Inside download cv service");
    this.http.post(this.download_cv_url,cv)
    .subscribe((res)=>{
      console.log('Done');
    })
    
  }


  //Delete cv
  deleteCV(cv_id){
    console.log("inside delete");
    console.log(cv_id);
    console.log(this.delete_cv_url+cv_id);
    return this.http.delete(this.delete_cv_url+cv_id).subscribe(res =>{
      console.log('Done');
    })
  }

  //Get All CVs of one user
  getCvs(){
    this.getLoginEmail();
    return this.http.get(this.get_cv_url+this.loginEmail);
  }


  //SaveCV
  saveCV(cv){
    console.log("Inside service file");
    console.log(cv);
    this.http.post(this.post_cv_url,cv)
    .subscribe((res) => {
      console.log('Done');
      alert("CV Saved");
    })
  }


  
 
                                    //LOGIN/SINGUP
  

  //LoginUser
    getUser(email,password) : any{
    // .subscribe((res) => console.log('Done'));
    console.log("INside get User");
    
    let obj : any
    // this.loggedIn.next(true);
    
    return this.http.get<any>(this.get_user_url+email)

    
    
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
    .subscribe((res) => 
    {
      console.log('Done');
      this.loggedIn.next(true);
    }
    
    );
  } 
}
