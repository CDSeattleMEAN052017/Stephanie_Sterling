import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._userService.allUsers()
    .subscribe(
      (data) => {this.users = data},
      (err) => { },
      () => { }
    );
  }

}
