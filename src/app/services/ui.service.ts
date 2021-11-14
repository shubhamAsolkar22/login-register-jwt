import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private resetAuthenticationSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  setAuthStatus(status: boolean){
    this.resetAuthenticationSubject.next(status);
  }
  onAuthReset():Observable<boolean> {
    return this.resetAuthenticationSubject.asObservable();
  }
}
