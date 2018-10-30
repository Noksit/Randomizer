import {Component, OnInit} from '@angular/core';
import {User} from '../services/user';
import {UserService} from '../services/user.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {group} from '@angular/animations';

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
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.userList = users);
  }

  onSubmit() {
    let oSelectItems = this.users.value;
    oSelectItems.length === 1 ? this.shuffledGroup = this.shuffle(oSelectItems[0]) : this.shuffledGroup = this.shuffle(oSelectItems);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


}
