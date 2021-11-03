import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  landingform: FormGroup ;
  userExists : boolean = false;
  editing : boolean = false;
  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.landingform = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email])
  });
  }

  get email() {
    return this.landingform.get("email");
  }

  toggleEditingFlag(){
    this.editing = !this.editing;
  }

  checkIfUserExists(email : string){
    console.log('checking...',this.landingform.get("email")?.value);
    this.usersService.checkIfUserEmailExists(email).subscribe(exists => this.userExists = exists);
  }

  goForPwd(){
    console.log('go for pwd...');
  }
}
