import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends = [];
  constructor(private _friendService: FriendsService, private router: Router) { }

  ngOnInit() {
    console.log(this._friendService);
    this._friendService.allFriends()
    .subscribe(
      (data) => {this.friends = data},
      (err) => { },
      () => { }
    );
  }

  deleteFriend(id, index) {
    this.friends.splice(index, 1)
    console.log("delete friend running");
    this._friendService.delFriend(id).toPromise().then(data => {
      this.router.navigate([''])
    })
    .catch( err => {
      console.log(err);
    });
  }

}
