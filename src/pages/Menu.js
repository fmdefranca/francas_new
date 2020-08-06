import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import cards from "./menuItems";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ECF0F1",
  },
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

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.menuHeading}>
        <Grid container justify="center">
          <Typography variant="h2">
            OUR <span className={classes.underline}>MENU</span>
          </Typography>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography gutterBottom variant="h5" component="h4">
                        {card.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography
                        variant="body1"
                        color="primary"
                        align="center"
                      >
                        Reg
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography
                        variant="body1"
                        color="primary"
                        align="center"
                      >
                        Med
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography
                        variant="body1"
                        color="primary"
                        align="center"
                      >
                        Lrg
                      </Typography>
                    </Grid>
                  </Grid>
                  {card.items.map((n) => (
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <div className={classes.pricesGrid}>{n.name}</div>
                      </Grid>
                      <Grid item xs={2}>
                        <div className={classes.pricesGrid}>
                          {n.regular === null ? "" : "£"}
                          {n.regular}
                        </div>
                      </Grid>
                      <Grid item xs={2}>
                        <div className={classes.pricesGrid}>
                          {n.medium === null ? "" : "£"}
                          {n.medium}
                        </div>
                      </Grid>
                      <Grid item xs={2}>
                        <div className={classes.pricesGrid}>
                          {n.large === null ? "" : "£"}
                          {n.large}
                        </div>
                      </Grid>
                    </Grid>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
