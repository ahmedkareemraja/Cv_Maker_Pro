import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

export interface PeriodicElement {
  title: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'Hydrogen'},
  {title: 'Helium'}
  
 
];

let Cv_obj : any


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
    ) { }

  ngOnInit(): void {

    this.us.getCvs()
    .subscribe(res =>{
      // console.log('DOne');
      // console.log(res);
      Cv_obj = res;
      // console.log(Cv_obj[1].name);
      this.dataSource = Cv_obj;
    })

    
  }

  deleteBtn(i){
    console.log(i);
    // console.log(Cv_obj[i]);
    // console.log(Cv_obj[i].cv_id);
    this.us.deleteCV(Cv_obj[i].cv_id);
  }

  downloadPdf(i){
    // console.log(i);
    console.log(Cv_obj[i].cv_id);
    this.us.downloadCV(Cv_obj[i]);
  }

  editBtn(i){
    console.log('Edit btn clicked');
  }


  createCvBtn(){
    this.router.navigateByUrl('/cv');
  }

  

}
