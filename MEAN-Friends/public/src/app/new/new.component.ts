import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  nF = {
    first_name: '',
    last_name: '',
    birthday: ''
  }
  constructor(private _friendService: FriendsService, private router: Router) {
  }

  ngOnInit() {
  }

  newFriend(newFriendData) {
    console.log("newfriend running");
    console.log(newFriendData)
    this._friendService.createFriend(newFriendData).toPromise().then(data => {
        this.router.navigate([''])
    })
    .catch( err => {
      console.log(err);
    });

  }
}
