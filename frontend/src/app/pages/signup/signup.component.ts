import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  /**loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
  })

  get email(){return this.loginForm.get('email')}*/

  public user={
    title:'',
    fname:'',
    lname:'',
    country:'',
    dob:'',
    contact:'',
    password:'',
    confirmPassword:'',
    email:'',

  };

  ngOnInit(): void {
  }

  formSubmit(){
    
    if(this.user.password!=this.user.confirmPassword || this.user.fname == '' || this.user.fname == null || this.user.title=='' || this.user.title==null || this.user.lname=='' || this.user.lname=='' || this.user.country=='' || this.user.country==null || this.user.dob=='' || this.user.dob==null || this.user.contact=='' || this.user.contact==null || this.user.password=='' || this.user.confirmPassword=='' || this.user.confirmPassword==null || this.user.password==null || this.user.email=='' || this.user.email==null){
      alert("Check your inputs");
      return;      
    }
  }

  
}
