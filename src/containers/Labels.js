import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Label from '../components/label'
import * as pageActions from '../actions/PageActions'

class Labels extends Component {
  render() {
    const {labels} = this.props;
    console.log('labels: ', labels);
    let labelsList = labels.map( (item, index) => 
      <Label text={item.text} key={index} />
    );

    return (
      <div className='col-md-4'>
        <h2>Labels</h2>
        {labelsList}
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    labels: state.labels
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Labels)
