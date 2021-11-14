import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UiService } from 'src/app/services/ui.service';
import { UsersDummyService } from 'src/app/services/users-dummy.service';
import { UsersService } from 'src/app/services/users-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers:[{provide:UsersService,useClass:UsersDummyService}]
})

export class LandingComponent implements OnInit {
  landingform: FormGroup;
  authenticationStatusMsg : string = '';
  // @Output() resetAuthenticationEvt : EventEmitter<boolean>  = new EventEmitter<boolean>();
  

  constructor(private usersService: UsersService,private uiService : UiService) { }

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

    this.usersService.authenticate(u).subscribe(
      btoken => {
      console.log(btoken);
      /**store token in local storage */
        this.uiService.setAuthStatus(true);
      }
      ,
       err => {this.authenticationStatusMsg = err});
  }
}
