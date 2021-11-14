import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TOKEN } from "src/assets/token";
import { Btoken } from "../interfaces/btoken";
import { User } from "../interfaces/user";


export class UsersService {
    authenticate(user: User): Observable<Btoken>{
        console.log('from parent');
        return of<Btoken>({btoken:`${TOKEN}`});
    }
}
