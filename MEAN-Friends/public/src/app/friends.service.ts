import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import "rxjs";

@Injectable()
export class FriendsService {
  constructor(private _http: Http) { }

  ngOnInit() {
  }

  allFriends() {
    console.log("calling all_friends")
    return this._http.get('/friends').map(data => {
      console.log(data)
      return data.json()
    })
  }

  createFriend(newFriendData) {
    console.log("calling create_friend")
    return this._http.post('/friends', newFriendData).map(data => {
      console.log(data)
      return data.json()
    })
  }

  editFriend(friendData, id) {
    console.log("calling edit_friend")
    return this._http.put('/friends/' + id, friendData).map(data => {
      console.log(data)
      return data.json()
    })
  }

  findFriend(id) {
    return this._http.get('/friends/' + id).map(data => {
         console.log(data)
         return data.json()
       })
  }

  delFriend(id) {
    console.log('delfriend')
    return this._http.delete('/friends/' + id).map(data => {
         console.log(data)
         return data.json()
       })
  }
}
