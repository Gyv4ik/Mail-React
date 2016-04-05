import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Message from '../components/message'
import * as pageActions from '../actions/PageActions'

class Messages extends Component {
  render() {
    const {messages} = this.props;
    let mesList = messages.map( (mes, index) =>
      <Message text={mes.text} labels={mes.labels} key={index}/>
    );

    return (
      <div className='col-md-8'>
        <h2>Messages</h2>
        {mesList}
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
