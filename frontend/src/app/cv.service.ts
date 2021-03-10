import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { BehaviorSubject, ReplaySubject ,Subject , Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  post_cv_url ="http://localhost:8080/addCV"
  get_cv_url = "http://localhost:8080/cv/all/"
  delete_cv_url = "http://localhost:8080/delete/"
  download_cv_url = "http://localhost:8080/download"
  update_cv_url = "http://localhost:8080/update/"

  get_edit_cv_url = "http://localhost:8080/cv/"


  cVSubject = new Subject();
  subject = new Subject<any>();
  // subject = new ReplaySubject<any>();

  constructor(
    private http:HttpClient,
    private us: UserService,
    private router:Router
  ) { }


                  
  //COMMUNICATION BETWEEN COMPONENTS
  getEvent():Observable<any>{
    // console.log("Inside get EMITTER");
    return this.subject.asObservable();
  }

  sendEvent(cv){
    // console.log("INSIDE SEND EMMITTER");
    this.subject.next(cv);
  }

  




                            //CV OPERATIONS

  //update CV
  updateCV(cv,cv_id){
    console.log("Inside update cv service");
    console.log(cv_id);
    console.log(cv);

    console.log(this.update_cv_url+cv_id);
    this.http.put(this.update_cv_url+cv_id,cv)
    .subscribe((res)=>{
      alert("CV updated");
    })
  }


  //download cv
  downloadCV(cv){
    console.log("Inside download cv service");
    this.http.post(this.download_cv_url,cv)
    .subscribe((res)=>{
      console.log('Done');
    })
    
  }



  //get One  cv 
    getOneCV(cv_id){
    console.log("Inside update cv service");
    //return this.http.get(this.get_cv_url+this.us.loginEmail);
    //this.http.get(this.get_edit_cv_url)
    //console.log(cv_id);
    return this.http.get(this.get_edit_cv_url+this.us.loginEmail+"/"+cv_id);
    
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
    //this.us.getLoginEmail();
    return this.http.get(this.get_cv_url+this.us.loginEmail);
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
}
