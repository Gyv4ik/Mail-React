import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messages from '../containers/Messages';
import Labels from '../containers/Labels';

require('bootstrap/dist/css/bootstrap.css');

class App extends Component {
  render() {
    return (
      <div className='row'>
        <Messages />
        <Labels />
      </div>
    );
  }
}

export default connect()(App);
