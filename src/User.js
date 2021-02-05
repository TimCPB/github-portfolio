import React from "react";

function User(props) {
  return (
    <div className="user">
      {props.userData.name}
      <img
        src={props.userData.avatar_url}
        alt="avatar"
        height={200}
        width={200}
      ></img>
    </div>
  );
}

export default User;
