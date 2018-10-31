import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../services/user';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {DialogData} from '../home/home.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  preparedUser: User;
  rouletteRusse: number;
  userList: User[];
  createForm = new FormGroup({
    firstName: new FormControl(''),
  });
  checkbox = new FormControl();

  constructor(private userService: UserService, private dialog: MatDialog) {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.userList = users);
  }

  wannaPlay(): boolean {
    this.preparedUser = new User(this.createForm.value.firstName, this.userList[this.userList.length - 1].id + 1);
    console.log(this);
    return !!this.checkbox.value;

  }

  onSubmit() {
    console.log('onSubmit');
    console.log(this);
    this.userList.push(this.preparedUser);
    const dialogRef = this.dialog.open(PlayDialogComponent, {
      width: '250px',
      data: {
        value: 'User Créé',
        text: ''
      }
    });
    console.log(this.userList);
  }

  letsPlay() {
    const dialogRef = this.dialog.open(PlayDialogComponent, {
      width: '250px',
      data: {
        value: 'Roulette russe',
        text: '1 chance sur 6 de creer le User'
      }
    });
  }

  onContinue() {
    this.dialog.closeAll();
    this.rouletteRusse = this.randomIntFromInterval(1, 6);
    if (this.rouletteRusse === 1) {
      this.onSubmit();
    } else {
      const dialogRef = this.dialog.open(PlayDialogComponent, {
        width: '250px',
        data: {
          value: 'Roulette russe',
          text: 'Pas de chance ! On recommence'
        }
      });
    }

  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.html'
})
export class PlayDialogComponent {
  constructor(
    public userComponent: UserComponent,
    public dialogRef: MatDialogRef<PlayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onContinue(): void {
    this.userComponent.onContinue();
  }
}
