import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sarees',
  templateUrl: './sarees.component.html',
  styleUrls: ['./sarees.component.css']
})
export class SareesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  saree(){
    this.router.navigate(['suta-order'])
  }


}
