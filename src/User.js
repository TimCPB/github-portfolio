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
    const json = await fetchUserData()
        this.setState({ userData: json });
  }

  render() {
    return <div className="user">{this.state.userData.name}</div>;
  }
}

export default User;
