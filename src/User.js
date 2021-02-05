import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/timcpb")
    const json = await response.json();
        this.setState({ userData: json });
  }

  render() {
    return <div className="user">{this.state.userData.name}</div>;
  }
}

export default User;
