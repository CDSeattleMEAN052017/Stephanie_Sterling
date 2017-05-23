import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './extend';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import LoginPage from './components/LoginPage';
import Messages from './components/Messages';

class Root extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/messages" component={Messages}/>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
