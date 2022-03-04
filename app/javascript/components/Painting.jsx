import React, { PureComponent } from 'react'
import { Comment, Avatar } from 'antd'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'

class Painting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getUser = (userId) => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const url = '/users/' + userId + '/thumbnail_url'
    fetch(url, {
      method: 'GET',
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      data: {user_id: userId},
    })
      .then((data) => {
        if (data.ok) {
          return data;
        }
        throw new Error("Network error.");
      })
      .catch((err) => console.error("Error: " + err));
  }

  render() {
    return this.props.comments.map((comment, index) => {
    <div>
    <Comment
    avatar={<Avatar src={this.getUser(comment.user_id)} size='medium'/>}
    content={<p> ahoy, {comment.caption} </p>}></Comment>
    </div>});
 }
}

export default Painting;
