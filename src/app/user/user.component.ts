import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../services/user';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: User[];
  userForm = new FormGroup({
    firstname: new FormControl()
  });

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.userList = users);
  }

  onSubmit() {
    console.log('submit');
  }
}
