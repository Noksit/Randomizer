import {Component, OnInit} from '@angular/core';
import {User} from '../services/user';
import {UserService} from '../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {
  userList: User[];
  users = new FormControl();
  userForm = new FormGroup({
    firstname: new FormControl()
  });
  shuffledGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
    this.userList = Object.assign([], this.userList);
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.userList = users);
  }

  onSubmit() {
    let oSelectItems = Object.assign([], this.users.value);
    oSelectItems.length === 1 ? this.shuffledGroup = this.shuffle(oSelectItems[0]) : this.shuffledGroup = this.shuffle(oSelectItems);
  }

  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


}
