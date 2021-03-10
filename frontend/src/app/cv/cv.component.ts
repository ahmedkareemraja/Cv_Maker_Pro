import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray,Validators,FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import {Observable, Subject, Subscription } from 'rxjs'
import { UserService } from '../user.service';
import {CvService} from '../cv.service';



@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  getCvSubscription : Subscription;
  editFlag : boolean = false;
  temp_cv_id : number;

  // title: String = "";
  // name : String = "";
  // phone : number;
  // address : String = "";
  email_fk : String = "";
  
  cvForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private us: UserService,
    private router:Router,
    private cs:CvService
  ) { 
    this.getCvSubscription = this.cs.getEvent().subscribe((res)=>{
      // console.log('Inside COnst');
      this.editCV(res);
    })
    //this.makeSubscription();
  }

  

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

    });

    // this.cvForm.patchValue({
    //     name:'ahmed@gai'
    //   });
    

    //this.addEducationButton();
  //  (<FormArray>this.cvForm.controls['education']).at(1).patchValue({
  //    degree : 'bscs'
  //  });

    
  
    
  }



//EDIT CV

editCV(res){
 
  this.editFlag = true;
  console.log(res);
  this.temp_cv_id = res.cv_id;
  this.cvForm.patchValue({
    title : res.title,
    name:res.name,
    phone:res.phone,
    address:res.address        
    });   
  

    var i = 0;
  //Expanding education array;
  

  (<FormArray>this.cvForm.controls['education']).at(0).patchValue({
    degree : res.education[0].degree,
    institution : res.education[0].institution
   });
    


  if(res.education.length > 1){
    console.log("Education condition is true");

    for(i = 1; i < res.education.length ; i++){
      console.log("Inside for loop " + i);
      this.addEducationButton();
      (<FormArray>this.cvForm.controls['education']).at(i).patchValue({
        degree : res.education[i].degree,
        institution : res.education[i].institution
       });
    }
  }

  //Expanding experience  array;

  (<FormArray>this.cvForm.controls['experience']).at(0).patchValue({
    company : res.experience[0].company,
    job_title : res.experience[0].job_title
   });

 if(res.experience.length > 1){
   console.log("Inside experience true");
  for(var j = 1; j < res.experience.length ; j++){
    this.addExperienceButton();
    (<FormArray>this.cvForm.controls['experience']).at(j).patchValue({
      company : res.experience[j].company,
      job_title : res.experience[j].job_title
     });
  }
 }





    
}


  //SAVE CV BUTTON
  saveCV(cv){

    //edit
    if(this.editFlag == true)
    {
        console.log("save edit flag = true");
        console.log(cv.cv_id);
        this.cs.updateCV(cv,this.temp_cv_id);
        this.editFlag = false;
    }
    //save new cv
    else
    {
      console.log('save cv clicked')
      console.log(cv.title);
      this.cs.saveCV(cv);
      this.router.navigate(['/home']);
      this.editFlag = false;
    }
     
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

