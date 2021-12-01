import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http"
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  body={Email:""}

  constructor(private api: ApiService,private router:Router) { }

  ngOnInit(): void {
  }
  
  handleChanges(event:any,type:any){
    if(type=='email'){
this.body.Email=event.target.value
    }
  }
  Forgot(){
    let formData= new FormData
    formData.append("Email",this.body.Email)

  // Forgot(){
  //   this.router.navigate(['login'])
  // }
  // console.log(this.body)
  // this.api.forgot(formData)
  //   .subscribe(result => {
  //     alert("success");
  //   })
    this.api.forgot(formData).subscribe(result=>{
      if(result)  this.router.navigate(['/login'])      
    })
  }

}
