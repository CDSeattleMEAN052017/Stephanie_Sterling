import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newUser = {
    email:'',
    first_name:'',
    last_name:'',
    password:'',
    birthday: '',
    con_pass:''
  };
  userLogin = {
    login_email:'',
    login_password:'',
  };
  register_errors;
  login_errors;

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    this._userService.createUser(formData).toPromise().then(data => {
      console.log('component good')
      console.log(data);
      this.newUser = {
        email:'',
        first_name:'',
        last_name:'',
        password:'',
        birthday: '',
        con_pass:''
      };
    })
    .catch( err => {
      console.log('component errors')
      console.log(err.json());
      this.register_errors = err.json();
    });
  }

  login(formData) {
    this._userService.toLogin(formData).toPromise().then(data => {
      console.log('component good')
      console.log(data);
      this.userLogin = {
        login_email:'',
        login_password:'',
      };
    })
    .catch( err => {
      console.log('component errors')
      console.log(err);
      this.login_errors = err.json().error;
    });
  }

  passwordsSame() {
    return this.newUser.password === this.newUser.con_pass;
  }

  passValid(pass) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(pass);
  }

  emailValid(email) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(email);
  }

}
