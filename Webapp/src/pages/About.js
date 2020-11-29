import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


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
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Grid container>
              <Grid item xs={4}>
                <div>Address</div>
                <div>Franca’s Fish and Chips 33 The Green Ware SG12 0QW</div>
                <div>01920 462 713</div>
                <div>info@francasfishandchips.co.uk</div>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1" color="primary" align="center">
                  OPENING TIMES
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
