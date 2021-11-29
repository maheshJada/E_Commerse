import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mens-wear',
  templateUrl: './mens-wear.component.html',
  styleUrls: ['./mens-wear.component.css']
})
export class MensWearComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Forgot(){
    this.router.navigate(['login'])
  }

}
