import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'users': [], redirect: false};
    axios.get('/users').then(data => {
      console.log('all users');
      console.log(data.data);
      this.setState({
        users: data.data
      });
    })
    .catch( err => {
      console.log(err);
    });

    this.logout = this.logout.bind(this);
  }

  logout() {
    console.log(this.state);
    axios.post('/logout').then(data => {
      console.log('success');
      this.setState({ ...this.state, redirect: true })
    })
    .catch( err => {
      console.log('err');
    });
  }

  render() {
    var users = []
    for (var i = 0; i < this.state.users.length; i++) {
      users.push(<tr><td>{this.state.users[i].first_name}</td><td>{this.state.users[i].last_name}</td></tr>)
    }

    if (this.state.redirect) {
      return <Redirect to='/'/>;
    }

    return (
      <div>
        <button onClick={this.logout}>Logout</button>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
            {users}
        </table>
      </div>
    )
  }
}

export default AllUsers;
