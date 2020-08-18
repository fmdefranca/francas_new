import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Maps from "../components/Maps";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  menuHeading: {
    marginTop: theme.spacing(8),
  },
  pricesGrid: {
    paddingRight: "10px",
    backgroundColor: "white",
  },
  underline: {
    textDecoration: "underline",
  },
  box: {
    // border: "1px solid red",
    backgroundColor: "#ECF0F1",
  },
  addressBox: {
    color: "#808080",
  },
  openingTimesContainer: {
    marginTop: theme.spacing(4),
  },
  openingTimesTable: {
    height: 60,
    width: 60,
    border: "1px solid white",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "45vh",
    // border: "2px solid red",
  },
  // maps: {
  //   width: "50%",
  //   height: "50%",
  // },
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.menuHeading}>
        <Grid container justify="center">
          <Typography variant="h2">
            WHERE TO <span className={classes.underline}> FIND </span> US{" "}
          </Typography>{" "}
        </Grid>{" "}
      </Container>{" "}
      <Container maxWidth="lg">
        <Grid className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Grid
                container
                spacing={2}
                direction="column"
                className={classes.box}
              >
                <Grid item>
                  <Typography variant="h4">
                    <LocationOnIcon
                      style={{
                        fontSize: 40,
                      }}
                    />
                    ADDRESS{" "}
                  </Typography>{" "}
                </Grid>{" "}
                <Grid item>
                  <Box className={classes.addressBox}>
                    <Typography variant="body1">
                      Franca’ s Fish and Chips <br />
                      33 The Green <br />
                      Ware <br />
                      SG12 0 QW{" "}
                    </Typography>{" "}
                  </Box>{" "}
                </Grid>{" "}
                <Grid item>
                  <PhoneIcon
                    style={{
                      fontSize: 40,
                    }}
                  />
                  01920 462 713{" "}
                </Grid>{" "}
                <Grid item>
                  <EmailIcon
                    style={{
                      fontSize: 40,
                    }}
                  />
                  info @francasfishandchips.co.uk{" "}
                </Grid>{" "}
              </Grid>{" "}
            </Grid>{" "}
            <Grid item xs={12} md={8} className={classes.box}>
              <Typography variant="h4" align="center">
                OPENING TIMES{" "}
              </Typography>{" "}
              <Grid
                container
                className={classes.openingTimesContainer}
                spacing={2}
              >
                <Grid item xs={12}>
                  <Grid container justify="center">
                    <Grid item className={classes.openingTimesTable}>
                      {" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      Mon{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      Tue{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      Wed{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      Thur{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      Fri{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      Sat{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      Sun{" "}
                    </Grid>{" "}
                  </Grid>{" "}
                  <Grid container justify="center">
                    <Grid item className={classes.openingTimesTable}>
                      AM{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      11: 30 <br />
                      14: 30{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      11: 30 <br />
                      14: 30{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      11: 30 <br />
                      14: 30{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      11: 30 <br />
                      14: 30{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      11: 30 <br />
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      11: 30 <br />
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      Closed{" "}
                    </Grid>{" "}
                  </Grid>{" "}
                  <Grid container justify="center">
                    <Grid item className={classes.openingTimesTable}>
                      PM{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      11: 30 <br />
                      14: 30{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      11: 30 <br />
                      14: 30{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      11: 30 <br />
                      14: 30{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      11: 30 <br />
                      14: 30{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      <br />
                      14: 30{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      <br />
                      14: 30{" "}
                    </Grid>{" "}
                    <Grid item className={classes.openingTimesTable}>
                      Closed{" "}
                    </Grid>{" "}
                  </Grid>{" "}
                </Grid>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Grid>{" "}
          <Grid container>
            <Grid item className={classes.paper}>
              <div>
                <Maps />
              </div>
            </Grid>
          </Grid>
        </Grid>{" "}
      </Container>
    </React.Fragment>
  );
}
