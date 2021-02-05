import React from "react";

function UserInfo(props) {
  return (
    <div className="user">
      <ul>
        <li>{props.userData.name}</li>
        <li>{props.userData.bio}</li>
      </ul>
    </div>
  );
}

export default UserInfo;
