import React, { PropTypes, Component } from 'react'

export default class Message extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className='row message'>
        <div className='col-md-2 message__checkbox'>
          <input type='checkbox' name='checkbox'/>
        </div>
        <div className='col-md-6 message__text'>{text}</div>
        <div className='col-md-6 message__labels'></div>
      </div>
    );
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired
}
