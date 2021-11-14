import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-register-jwt';
  authenticated : boolean;
  subscription: Subscription;

  constructor(private uiService : UiService){
    this.subscription = this.uiService
      .onAuthReset()
      .subscribe((value) => (this.authenticated = value));
  }

  handleResetAuthenticationEvt(authenticationStatus :any){
    console.log(authenticationStatus);
    // this.authenticated = authenticationStatus;
  }

}
