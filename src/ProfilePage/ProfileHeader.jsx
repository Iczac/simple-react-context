import React from 'react';
import { Row, Col } from 'antd';

class ProfileHeader extends React.PureComponent {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={12}>
          <h1 className="text-center">Profile Page(React Context)</h1>
        </Col>
      </Row>
    )
  }
}

export default ProfileHeader;