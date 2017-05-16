import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  newUser = {
    email:'',
    first_name:'',
    last_name:'',
    password:'',
    con_pass:''
  };
  constructor() { }
  onSubmit(formData) {
    console.log(formData);
  }

  ngOnInit() {
  }

  passwordsSame() {
    return this.newUser.password === this.newUser.con_pass
  }

}
