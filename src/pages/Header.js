import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
  headerBanner: {
    padding: theme.spacing(6, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h1": {
      border: "1px solid red",
    },
  },
  logo: {
    width: "14em",
  },
  headerInformationBanner: {
    alignItems: "center",
    color: "grey",
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
          style={{ padding: "2.5em 5em" }}
        >
          <Grid item xs={12} md={6}>
            <img
              className={classes.logo}
              src="/images/logo_white.png"
              alt="Franca's Logo"
            />
          </Grid>

          {/* Modifying here */}
          <Grid item xs={12} sm={4} md={4}>
            <Card className={classes.headerInformationBanner}>
              <Grid container direction="row" alignContent="space-between">
                <Grid>
                  <CardContent>
                    <div>
                      <PhoneRoundedIcon style={{ fontSize: 40 }} />
                      <Typography variant="h6" component="span">
                        01920 462 713
                      </Typography>
                    </div>
                    <div>
                      <LocationOnIcon style={{ fontSize: 40 }} />
                      <Typography variant="h6" component="span">
                        01920 462 713
                      </Typography>
                    </div>
                  </CardContent>
                </Grid>
                <Grid>
                  <CardContent>
                    <div>
                      <WatchLaterIcon style={{ fontSize: 60 }} />{" "}
                      <Typography variant="h6" component="span">
                        Open Today
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h6" component="span">
                        AM 11:00 -- 14:30
                        <br />
                        PM 16:00 -- 21:00
                      </Typography>
                    </div>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          {/* end modifying */}
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          xs={12}
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
    </Grid>
  );
}
