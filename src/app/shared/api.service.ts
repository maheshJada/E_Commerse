import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='http://localhost:45503/api'

  constructor(private http:HttpClient) { }

  login(body:any){
    return this.http.post<any>(this.url+"/login",body)
  }
  signup(body:any){
    return this.http.post<any>(this.url+"/signup",body)
  }
  forgot(body:any){
    return this.http.patch<any>(this.url+"/ForgotPassword",body)
  }
  
}
