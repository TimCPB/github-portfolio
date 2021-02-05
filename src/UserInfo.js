import React from "react";

function UserInfo(props) {
  return (
    <div className="user">
      {props.userData.name}
    </div>
  );
}

export default UserInfo;