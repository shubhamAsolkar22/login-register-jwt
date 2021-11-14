import { Observable } from "rxjs";
import { Btoken } from "../interfaces/btoken";
import { User } from "../interfaces/user";

export interface UsersService {
    authenticate(user: User): Observable<Btoken>;
}
