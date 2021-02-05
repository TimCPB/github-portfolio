import React from "react";
import './Avatar.css';

function Avatar(props) {
  return (
    <div className="user">
      <img
        src={props.userData.avatar_url}
        alt="avatar"
        height={200}
        width={200}
      ></img>
    </div>
  );
}

export default Avatar;
