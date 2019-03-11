import React from 'react';
import ProfileContext from './profile-context.js';


class ProfileDisplay extends React.PureComponent {
  render() {
    return (
      <ProfileContext.Consumer>
        {( context ) => {
          const {
            profileObject,
          } = context;

          const {
            firstName,
            lastName,
            age,
            gender,
          } = profileObject;

          return (
            <span>
              <h4>First Name: {firstName}</h4>
              <h4>Last Name: {lastName}</h4>
              <h4>Age: {age}</h4>
              <h4>Gender: {gender}</h4>
            </span>
          )
        }}
      </ProfileContext.Consumer>
    )
  }
}

export default ProfileDisplay;
