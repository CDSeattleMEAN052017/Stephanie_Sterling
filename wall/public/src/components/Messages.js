import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Auth from './Auth';

import Message from './Message';

class Messages extends Auth {
  constructor(props) {
    super(props);
    this.setState({ ...this.state, 'messages': [], 'user': '', 'message': ''});

    this.handleChange = this.handleChange.bind(this);
    this.logout = this.logout.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    axios.get('/messages').then(data => {
      this.setState({
        ...this.state,
        messages: data.data.messages,
        user: data.data.user.first_name
      });
      })
      .catch( err => {
        console.log(err);
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  logout() {
    console.log(this.state);
    axios.post('/logout').then(data => {
      console.log('success');
      this.setState({ ...this.state, logged_in: false })
    })
    .catch( err => {
      console.log(err);
    });
  }

  addMessage(event) {
    var data = this.state;
    axios.post('/new_message', data).then(data => {
      var messages = this.state.messages.slice();
      messages.push({ data });
      this.setState({
        ...this.state,
        messages: messages
      });
    })
    .catch( err => {
      console.log(err);
    });
  }

  actualRender() {
    if (this.state.login_pending) {
      return null;
    } else {
      var messages = []
      for (var i = 0; i < this.state.messages.length; i++) {
        messages.push(<Message message={this.state.messages[i]} />)
      }
    }

    return (
      <div>
        <button onClick={this.logout}>Logout</button>
        <h2>Welcome {this.state.user.first_name}!</h2>
        <form onSubmit={this.addMessage} method='post'>
            Message:<textarea name="message" cols="20" rows="4" value={this.state.message} onChange={this.handleChange}></textarea>
          <input type='submit' value='Post a message' />
        </form>
        <div>
          {messages}
        </div>
      </div>
    )
  }
}

export default Messages;
