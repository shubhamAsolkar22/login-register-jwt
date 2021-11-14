import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  landingform: FormGroup;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.landingform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      //add more realistic validations for passwords later.
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)])
    });
  }

  get email() {
    return this.landingform.get("email");
  }

  get password() {
    return this.landingform.get("password");
  }

  submitForm() {
    const u: User = {
      username: this.landingform.get("email")?.value,
      password: this.landingform.get("password")?.value
    };

    this.usersService.authenticate(u).subscribe(btoken => {
      console.log(btoken);
      /**store token in local storage */
    }, err => console.log(err));
  }
}
