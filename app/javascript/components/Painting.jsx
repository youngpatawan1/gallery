import React, { PureComponent } from 'react'
import { Comment, Avatar } from 'antd'
import { Link } from 'react-router-dom'

class Painting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    debugger
    return  <Comment
    content={
      <p>ahoy, {this.props.user}</p>
    }></Comment>
  ;
 }
}

export default Painting;
