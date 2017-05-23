import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'comment': '', 'message_id': this.props.message._id, 'comments': this.props.message.comments};

    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  addComment(event) {
    var data = this.state;
    axios.post('/new_comment', data).then(data => {
      var comments = this.state.comments.slice();
      comments.push({ data });
      this.setState({
        ...this.state,
        comments: comments
      });
    })
    .catch( err => {
      console.log(err);
    });
  }

  render() {
    var comments = []
    for (var i = 0; i < this.state.comments.length; i++) {
      comments.push(<div><p>{this.state.comments[i].commentName}</p><p>{this.state.comments[i].comment}</p><p>{this.state.comments[i].commentCreatedAt}</p></div>)
    }

    return (
      <div>
        <h3>{this.props.message.name} said:</h3>
        <h2>{this.props.message.message}</h2>
        <p>-Created at {this.props.message.createdAt}</p>
        <form onSubmit={this.addComment}>
            Comment:<textarea name="comment" cols="20" rows="4" value={this.state.comment} onChange={this.handleChange}></textarea>
          <input type='submit' value='Comment' />
        </form>
        <h4>Comments:</h4>
          <div>
            {comments}
          </div>
        <hr />
      </div>
    )
  }
}

export default Message;
