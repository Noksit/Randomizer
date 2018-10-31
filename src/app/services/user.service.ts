import {Injectable} from '@angular/core';
import {userList} from './mock-data';
import {User} from './user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getUsers(): Observable<User[]> {
    return of(userList);
  }

  getUser(id: number) {
    return of(userList.find(user => user.id === id));
  }
}
