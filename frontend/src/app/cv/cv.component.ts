import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray,Validators,FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  title: String = ""
  name : String = ""
  phone : number
  address : String = ""
  email_fk : String = "";
  
  cvForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private us: UserService,
    private router:Router
  ) { }


  ngOnInit(): void {
    this.email_fk = this.us.getLoginEmail();
    this.cvForm = this.fb.group({
      title :[],
      name : [],
      phone : [],
      address : [],
      email_fk:[this.email_fk],
      education : this.fb.array([this.addEducationGroup()]),
      experience : this.fb.array([this.addExperienceGroup()])

    })
  }



  //SAVE CV BUTTON
  saveCV(cv){

    console.log('save cv clicked')
    console.log(cv.title);
    this.us.saveCV(cv);
     
  }

  addExperienceGroup(){
    return this.fb.group({
      company : [],
      job_title : []
    })
  }

  get experienceArray(){
    // console.log('Experience Array');
    return <FormArray>this.cvForm.get('experience')
  }

  addExperienceButton(){
    this.experienceArray.push(this.addExperienceGroup());
    
  }

  removeExperienceButton(index){
    this.experienceArray.removeAt(index)
    
  }

  addEducationGroup(){
    
    return this.fb.group({
      institution : [],
      degree : []
    });
    // return this.fb.group({
    //   institution : [],
    //   degree : []
    // })
  }

  get educationArray(){
    // console.log('education Array');
    return <FormArray>this.cvForm.get('education');
    
  }

  addEducationButton(){
    // console.log('EducationButton');
    this.educationArray.push(this.addEducationGroup());
    
  }

  removeEducationButton(index){
    this.educationArray.removeAt(index);
  }

  

  

}

