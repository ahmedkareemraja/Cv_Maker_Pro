import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {CvService} from '../cv.service';
//import {CvComponent} from '../cv/cv.component'


export interface PeriodicElement {
  title: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'Hydrogen'},
  {title: 'Helium'}
  
 
];

let Cv_obj : any

let temp_cv : any


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['title', 'action'];
  dataSource = Cv_obj;

  constructor( 
    private router:Router,
    private us: UserService,
    private cs: CvService,
   // private CvComponent: CvComponent
    ) { }

  ngOnInit(): void {
    this.getCVs();
   
    
  }


  //Get All cvs for home 
  getCVs(){
    this.cs.getCvs()
    .subscribe(res =>{
      // console.log('DOne');
      // console.log(res);
      Cv_obj = res;
      
      this.dataSource = Cv_obj;
    })

  }

  editBtn(i){
    console.log('Edit btn clicked');
    this.cs.getOneCV(Cv_obj[i].cv_id)
    .subscribe(res => {
      
      console.log('DOne');
      temp_cv = res;
      
      this.cs.sendEvent(temp_cv);
    })
    // this.cs.sendEvent();
    this.router.navigate(['/cv']);
    

  }

  deleteBtn(i){
    console.log(i);
    // console.log(Cv_obj[i]);
    // console.log(Cv_obj[i].cv_id);
    this.cs.deleteCV(Cv_obj[i].cv_id);
    alert("CV deleted");
    //this.router.navigateByUrl('/home');
    this.getCVs();
  }

  downloadPdf(i){
    // console.log(i);
    console.log(Cv_obj[i].cv_id);
    this.cs.downloadCV(Cv_obj[i]);
  }

  


  createCvBtn(){
    this.router.navigateByUrl('/cv');
    console.log(this.us.loginEmail);
    console.log(this.us.loggedIn);
  }

  

}
