import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public userLogin={
    email:'',
    password:'', 
  };

  ngOnInit(): void {
  }

  formSubmit(){
    
    if(this.userLogin.password=='' || this.userLogin.password==null || this.userLogin.email=='' || this.userLogin.email==null){
      alert("Check your inputs");
      return;      
    }
    else{
      alert("Submit")
    }
  }

}
