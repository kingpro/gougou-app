import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as commentActions from '../actions/comment'
import Detail from '../pages/creation/detail'

import React, {Component} from 'react'

class DetailContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const rowData = this.props.navigation.state.params.rowData

    return (
      <Detail rowData={rowData} {...this.props} />
    )
  }
}

function mapStateToProps (state) {
  return {
    popup: state.get('app').popup,
    user: state.get('app').user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(commentActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer)