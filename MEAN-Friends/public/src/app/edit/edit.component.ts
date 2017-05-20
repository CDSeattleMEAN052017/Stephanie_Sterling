import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  friend = {
    first_name: '',
    last_name: '',
    birthday: ''
  };
  id;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _friendService: FriendsService
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      console.log('ID', params.id);
      this.id = params.id

    this._friendService.findFriend(params.id)
    .subscribe(
      (data) => {this.friend = data},
      (err) => { },
      () => { }
    );
    });
  }

  updateFriend(friendData) {
    console.log("update friend running");
    console.log(friendData)
    this._friendService.editFriend(friendData, this.id).toPromise().then(data => {
        this.friend = data
    })
    .catch( err => {
      console.log(err);
    });

  }

}
