import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import fetchUserData from "./utils";

import "./App.css";
// components
import User from "./User.js";

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
            <User userData={this.state.data} />
          </Grid>
          <Grid item xs={8}>
            1
          </Grid>
          <Grid item xs={4}>
            2
          </Grid>
          <Grid item xs={4}>
            3
          </Grid>
          <Grid item xs={4}>
            4
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
