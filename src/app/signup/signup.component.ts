import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http"
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  body={Name:"",Password:"",Email:"",PhoneNumber:"",Address:""}
  constructor(private api: ApiService,private router:Router) { 
    
  }


  //constructor(private router: Router) { }

  ngOnInit(): void {
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
    this.api.signup(formData)
      .subscribe(result => {
        alert("success");
      })

      this.api.signup(formData).subscribe(result=>{
        if(result)  this.router.navigate(['/login'])
      })
  }
   // this.router.navigate(['categories'])
}
