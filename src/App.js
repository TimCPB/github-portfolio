import React from "react";
import Grid from "@material-ui/core/Grid";

import "./App.css";
// components
import User from "./User.js";

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <User />
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

export default App;
