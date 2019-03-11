import React from "react";

const ProfileContext = React.createContext(
  /* Creating default value in case of values are not passed in by default. In our case, we don't need */
  null
);

export default ProfileContext;
