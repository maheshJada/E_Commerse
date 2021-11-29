import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loungwear',
  templateUrl: './loungwear.component.html',
  styleUrls: ['./loungwear.component.css']
})
export class LoungwearComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Long(){
    this.router.navigate(['suta-order'])
  }
}
