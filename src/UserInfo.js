import React from "react";

function UserInfo(props) {
  return (
    <div className="user">
      <ul>
        <li>{props.userData.name}</li>
        <li>{props.userData.bio}</li>
        <li>{props.userData.twitter_username}</li>
        <li>{props.userData.location}</li>
      </ul>
    </div>
  );
}

export default UserInfo;


