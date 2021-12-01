import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http"
import { ApiService } from '../shared/api.service';
// import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

body={Name:"",Password:""}
  constructor(private api: ApiService,private router:Router) { 
    
  }

  ngOnInit(): void {

  }

  handleChanges(event:any,type:any){
    if(type=='email'){
this.body.Name=event.target.value
    }
    else{
      this.body.Password=event.target.value

    }


  }
  Login(){
    let formData= new FormData
    formData.append("Name",this.body.Name)
    formData.append("Password",this.body.Password)
    console.log(this.body)
    this.api.login(formData)
      .subscribe(result => {
        alert("success");
      })
this.api.login(formData).subscribe(result=>{
  if(result)  this.router.navigate(['/categories'])
})
    // this.router.navigate(['categories'])
  }
  }
