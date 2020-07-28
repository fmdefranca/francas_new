import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/images/header_pic.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    // margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: "18em",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container component="header" className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.image}>
        <Grid
          container
          direction="row"
          justify="space-between"
          style={{ border: "2px solid red", padding: "2.5em 5em" }}
        >
          <div>
            <img
              className={classes.logo}
              src="/images/logo_white.png"
              alt="Franca's Logo"
            />
          </div>
          <Paper elevation={0} className={classes.paper}>
            <Grid container direction="row">
              <div>017888888282</div>
              <div>Open today: 11 till 2</div>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
