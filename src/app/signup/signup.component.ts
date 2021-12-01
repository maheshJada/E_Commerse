import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http"
import { ApiService } from '../shared/api.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  body={Name:"",Password:"",Email:"",PhoneNumber:"",Address:""}
  constructor(private api: ApiService,private router:Router) { 
    
  }

  

  valid = {
    Email: true,
    Name: true,
    Password: true,
    PhoneNumber: true,
    Address: true,

    
  }
  

  //constructor(private router: Router) { }

  ngOnInit(): void {


    
  }
  
  validate(type: string): void {
    const NamePattern = /^[a-zA-Z]+$/
    const EmailPattern = /\S+@\S+\.\S+/;
    const PhoneNumberPattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (type === 'text') {
      if (this.body.Name.length < 4 || this.body.Name.length >= 10) {
        this.valid.Name = false;
      } else {
        this.valid.Name = NamePattern.test(this.body.Name);
      }
    } else if (type === "PhoneNumber") {
      if (this.body.PhoneNumber.length < 10 || this.body.PhoneNumber.length > 10) {
        this.valid.PhoneNumber = false
      } else {
        this.valid.PhoneNumber = PhoneNumberPattern.test(this.body.PhoneNumber)
      }
    } else if (type === 'Email') {
       this.valid.Email = EmailPattern.test(this.body.Email);
   
    }
  }
  // signUp(){
  //   this.router.navigate(['login'])
  handleChanges(event:any,type:any){
    if(type=='Name'){
this.body.Name=event.target.value
    }
    else if(type=='Password'){
      this.body.Password=event.target.value

    }
    else if(type=='Email'){
      this.body.Email=event.target.value

    }
    else if(type=='PhoneNumber'){
      this.body.PhoneNumber=event.target.value

    }
    else{
      this.body.Address=event.target.value

    }


  }
  signUp (){
    let formData= new FormData
    formData.append("Name",this.body.Name)
    formData.append("Password",this.body.Password)
    formData.append("Email",this.body.Email)
    formData.append("PhoneNumber",this.body.PhoneNumber)
    formData.append("Address",this.body.Address)
    console.log(this.body)
      this.api.signup(formData).subscribe(result=>{
        if(result)  this.router.navigate(['/login'] ) 
      
      } )
  }
   // this.router.navigate(['categories'])
}
