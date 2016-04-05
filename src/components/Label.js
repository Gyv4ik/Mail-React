import React, { PropTypes, Component } from 'react'

export default class Label extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className='btn-lg btn-primary app-btn'>
        {text}
        <span className="close-btn" aria-hidden="true">×</span>
      </div>
    );
  }
}

Label.propTypes = {
  text: PropTypes.string.isRequired
}
