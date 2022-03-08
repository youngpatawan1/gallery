import React, { useState } from 'react'
import { Button, Tooltip } from 'antd'
import {HeartOutlined} from '@ant-design/icons'

const LikesButton = ({likes}) => {
  const [likedUsers, setLikedUsers] = useState(likes);

  return(
  <div className='row like-button'>  
  <Tooltip title={likes.toString()}>
    <span>< Button icon={<HeartOutlined />}></Button></span>
  </Tooltip>
  <div className='col'><p>{likes.length} likes</p></div>
  </div>
  );
}

export default LikesButton
