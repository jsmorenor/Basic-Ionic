import { Component, OnInit } from '@angular/core';
import { User } from '@core/models/user';
import { UserService } from '@modules/users/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: [ './all-users.component.scss' ],
})
export class AllUsersComponent implements OnInit {
  public users$: Observable<User[]> = new Observable<User[]>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService
      .getUsers();
  }
}
