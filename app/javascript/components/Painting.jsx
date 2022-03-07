import React, { PureComponent } from 'react'
import { Comment, Avatar } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import { Image, Button } from 'antd'
import {HeartOutlined} from '@ant-design/icons'

class Painting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes
    };
  }

  render() {
    return (
    <div>
    <Image width={500} src={this.props.image} />
    <Button icon={<HeartOutlined />}></Button>
    </div>
    );
 }
}

export default Painting;
