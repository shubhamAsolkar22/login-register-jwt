import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { STANDARD_PASSWORD, STANDARD_USER_NAME, TOKEN } from 'src/assets/token';
import { Btoken } from '../interfaces/btoken';
import { User } from '../interfaces/user';
import { UsersService } from './users-service';

@Injectable({
  providedIn: 'root'
})
export class UsersDummyServiceService implements UsersService {

  constructor() { }

  authenticate(user: User): Observable<Btoken> {
    if(user.username === STANDARD_USER_NAME && user.password === STANDARD_PASSWORD )
      return of<Btoken>({btoken:`${TOKEN}`});
    else
      return throwError('Unauthorised User');
  }
}
