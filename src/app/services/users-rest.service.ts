import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Btoken } from '../interfaces/btoken';
import { User } from '../interfaces/user';
import { UsersService } from './users-service';

@Injectable({
  providedIn: 'root'
})
export class UsersRestService implements UsersService{

  constructor(private httpClient: HttpClient) { }
  
  authenticate(user: User): Observable<Btoken> {
    const formData: FormData = new FormData();
    formData.set('username', user.username);
    formData.set('password', user.password);
    console.log('from rest');
    return this.httpClient.post<Btoken>('http://localhost:8080/authenticate',formData/* , httpOptions */);
    // if(user.username === STANDARD_USER_NAME && user.password === STANDARD_PASSWORD )
    //   return of<Btoken>({btoken:`${TOKEN}`});
    // else
    //   return throwError('Unauthorised User');
  }
}
