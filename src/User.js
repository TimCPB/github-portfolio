import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/timcpb")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ userData: response });
      });
  }

  render() {
    return <div className="user">{this.state.userData.name}</div>;
  }
}

export default User;
