import React, { PureComponent } from 'react'
import { Comment, Avatar } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import { Image } from 'antd'
import LikesButton from './LikesButton'

class Painting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes,
      paintingId: this.props.paintingId
    };
  }

  render() {
    return (
    <div className='painting-container'>
      <div className='row'>
      <Image width={500} src={this.props.image} />
      </div>
      <LikesButton likes={this.props.likes}/> 
    </div>
    );
 }
}

export default Painting;
