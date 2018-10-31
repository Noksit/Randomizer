import {Component, OnInit} from '@angular/core';
import {User} from '../services/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {userList} from '../services/mock-data';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    for (let i = 0; i < userList.length - 1; i++) {
      if (userList[i].id === this.user.id) {
        userList.splice(i, 1);
      }
    }
    this.router.navigate(['/users']);
  }
}
