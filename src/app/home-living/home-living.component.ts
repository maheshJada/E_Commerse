import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-living',
  templateUrl: './home-living.component.html',
  styleUrls: ['./home-living.component.css']
})
export class HomeLivingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Home(){
    this.router.navigate(['suta-order'])
  }


}
