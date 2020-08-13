import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

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
    border: "1px solid red",
    backgroundColor: "#ECF0F1",
  },
  addressBox: {
    color: "#808080",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.menuHeading}>
        <Grid container justify="center">
          <Typography variant="h2">
            WHERE TO <span className={classes.underline}>FIND</span> US
          </Typography>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container>
          <Grid container xs={12} md={4}>
            <Grid
              container
              direction="column"
              // alignItems="center"

              className={classes.box}
            >
              <Grid item>
                <Typography variant="h4">
                  <LocationOnIcon style={{ fontSize: 40 }} />
                  ADDRESS
                </Typography>
              </Grid>
              <Grid item>
                <Box className={classes.addressBox}>
                  <Typography variant="body1">
                    Franca’s Fish and Chips
                    <br />
                    33 The Green
                    <br />
                    Ware <br />
                    SG12 0QW
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <PhoneIcon style={{ fontSize: 40 }} />
                01920 462 713
              </Grid>
              <Grid item>
                <EmailIcon style={{ fontSize: 40 }} />
                info@francasfishandchips.co.uk
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} className={classes.box}>
            <Typography variant="body1" color="primary" align="center">
              OPENING TIMES
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
