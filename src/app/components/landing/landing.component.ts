import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  landingform: FormGroup ;

  constructor() { }

  ngOnInit(): void {
    this.landingform = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email])
  });
  }

  get email() {
    return this.landingform.get("email");
  }
}
