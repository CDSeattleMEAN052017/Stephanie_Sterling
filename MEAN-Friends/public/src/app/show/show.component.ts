import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  friend = {
    first_name: '',
    last_name: '',
    birthday: ''
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _friendService: FriendsService
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      console.log('ID', params.id);

    this._friendService.findFriend(params.id)
    .subscribe(
      (data) => {this.friend = data},
      (err) => { },
      () => { }
    );
    });
  }

}
