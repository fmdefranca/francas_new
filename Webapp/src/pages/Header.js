import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: "url(/images/header_pic.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  logo: {
    width: "12em",
  },
  navBar: {},
  navItem: {
    padding: "20px",
    color: "white",
    margin: "20px",
    fontSize: "1.5em",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid
      container
      component="header"
      xs={12}
      sm={12}
      md={12}
      lg={12}
      className={classes.root}
    >
      <Grid
        container
        direction="row"
        justify="space-between"
        style={{ padding: "2.5em 5em" }}
        item
      >
        <Grid item xs={12} md={6}>
          <img
            className={classes.logo}
            src="/images/logo_white.png"
            alt="Franca's Logo"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <nav className={classes.navBar}>
            <a href="#home" className={classes.navItem}>
              Home
            </a>
            <a href="#menu" className={classes.navItem}>
              Menu
            </a>
            <a href="#about" className={classes.navItem}>
              About
            </a>
          </nav>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
        xs={12}
        style={{ flexGrow: 3 }}
      >
        <Grid item>
          <Typography color="textSecondary" variant="h1">
            ORDER
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="textSecondary" variant="h1">
            COLLECT
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="textSecondary" variant="h1">
            ENJOY
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained">SEE MENU</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
