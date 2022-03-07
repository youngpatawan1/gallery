import React from 'react'
import Button from 'antd'
import {
HeartOutlined
} from '@ant-design/icons'

const LikesButton = () => {
  return (
    <Button icon={<HeartOutlined />}></Button>
  );
}

export default LikesButton;
