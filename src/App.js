import React from 'react';
import 'antd/dist/antd.css';
import ProfileHeader from './ProfilePage/ProfileHeader.jsx'
import ProfileBodyFrame from './ProfilePage/ProfileBodyFrame.jsx'
import ProfileContext from './ProfilePage/profile-context.js';


class App extends React.Component {
  // Helper function
  static cloneObject = (source) => {
    const target = {};
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
    return target;
  };

  state = {
    profileObject: {
      firstName: 'React',
      lastName: 'Context',
      age: 1,
      gender: 'Others',
    },
    changeProfile: (name, value) => {
      this.setState(() => {
        const newProfileObject = App.cloneObject(this.state.profileObject);

        newProfileObject[name] = value;

        return { profileObject: newProfileObject};
      })
    }
  };

  render() {
    return (
      <div className="App">
        <ProfileContext.Provider value={this.state}>
          <ProfileHeader />
          <ProfileBodyFrame />
        </ProfileContext.Provider>
      </div>
    );
  }
}

export default App;
