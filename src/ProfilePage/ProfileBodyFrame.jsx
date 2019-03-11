import React from 'react';
import { Row, Col } from 'antd';
import ProfileDisplay from './ProfileDisplay.jsx'
import ProfileEditBox from './ProfileEditBox.jsx'


class ProfileBodyFrame extends React.PureComponent {
  render() {
    return (
      <Row type="flex" justify="center" align="top">
        <Col span={6} offset={2}>
          <ProfileDisplay />
        </Col>
        <Col span={6} offset={2}>
          <ProfileEditBox />
        </Col>  
      </Row>
    )
  }
}

export default ProfileBodyFrame;