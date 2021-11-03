import { Injectable } from '@angular/core';
import { USERS } from '../../../db';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private USERS: User[] = USERS;
  constructor() { }

  checkIfUserEmailExists(email: string): Observable<boolean> {
    return of(USERS.filter(user => user.email === email).length === 1);
  }

}
