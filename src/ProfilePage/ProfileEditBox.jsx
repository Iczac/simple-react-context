import React from 'react';
import { Input } from 'antd';
import ProfileContext from './profile-context.js';

class ProfileEditBox extends React.PureComponent {
  render() {
    return (
      <ProfileContext.Consumer>
        {( context ) => {
          const {
            profileObject,
            changeProfile,
          } = context;

          const {
            firstName,
            lastName,
            age,
            gender,
          } = profileObject;

          return (
            <span>
              <Input
                id="firstName"
                placeholder="First Name"
                size="large"
                type="text"
                value={firstName}
                onChange={(e) => changeProfile('firstName', e.target.value)}
              />
              <Input
                id="lastName"
                placeholder="Last Name"
                size="large"
                type="text"
                value={lastName}
                onChange={(e) => changeProfile('lastName', e.target.value)}
              />
              <Input
                id="age"
                placeholder="Age"
                size="large"
                type="text"
                value={age}
                onChange={(e) => changeProfile('age', e.target.value)}
              />
              <Input
                id="gender"
                placeholder="Gender"
                size="large"
                type="text"
                value={gender}
                onChange={(e) => changeProfile('gender', e.target.value)}
              />
            </span>
          )
        }}
      </ProfileContext.Consumer>
    )
  }
}

export default ProfileEditBox;
