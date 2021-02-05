import React, { Component } from "react";
import fetchUserData from "./utils";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  async componentDidMount() {
    const json = await fetchUserData();
    this.setState({ userData: json });
  }

  componentDidUpdate() {
    console.log(this.state.userData);
  }

  render() {
    return (
      <div className="user">
        {this.state.userData.name}
        <img
          src={this.state.userData.avatar_url}
          alt="avatar"
          height={200}
          width={200}
        ></img>
      </div>
    );
  }
}

export default User;
