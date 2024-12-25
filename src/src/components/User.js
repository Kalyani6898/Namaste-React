import React, { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h2>Name: {name} (Function)</h2>
      <h3>Location: {location}</h3>
      <h4>Contact : 9876543210</h4>
      <h4>Count : {count}</h4>
    </div>
  );
};

export default User;
