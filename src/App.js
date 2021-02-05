import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import fetchUserData from "./utils";

import "./App.css";
// components
import Avatar from "./Avatar.js";
import UserInfo from "./UserInfo.js";
import Email from "./Email.js";
import Location from "./Location.js";
import Twitter from "./Twitter.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  async componentDidMount() {
    const json = await fetchUserData();
    this.setState({ data: json });
  }

  componentDidUpdate() {
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Avatar userData={this.state.data} />
          </Grid>
          <Grid item xs={8}>
            <UserInfo userData={this.state.data} />
          </Grid>
          <Grid item xs={4}>
            <Email userData={this.state.data} />
          </Grid>
          <Grid item xs={4}>
            <Location userData={this.state.data} />
          </Grid>
          <Grid item xs={4}>
            <Twitter userData={this.state.data} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
