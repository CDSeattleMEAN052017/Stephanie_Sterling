import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './extend';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import LoginPage from './components/LoginPage';
import AllUsers from './components/AllUsers';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/users" component={AllUsers}/>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
