import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Hello extends React.Component {
  render() {
    return <h1>{this.props.title}, {this.props.subtitle}</h1>
  }
}

export default Hello
