import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'

class Messages extends Component {
  render() {
    const messages = this.props.messages;
    console.log('messages: ', messages);

    return (
      <div className='col-md-4'>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    labels: state.labels
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
