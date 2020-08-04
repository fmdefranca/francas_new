import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
}));

const cards = [
  {
    name: "fish",
    items: [
      {
        name: "Chicken & Mushroom",
        low: null,
        med: null,
        high: 2.95,
      },
      {
        name: "Beef & Kidney",
        low: null,
        med: null,
        high: 2.95,
      },
    ],
  },
  {
    name: "chicken",
    items: [
      {
        name: "Steak & Kidney",
        low: null,
        med: null,
        high: 2.95,
      },
      {
        name: "Jumbo Sausage",
        low: null,
        med: null,
        high: 1.95,
      },
    ],
  },
  {
    name: "beef",
    items: [
      {
        name: "Battered Sausage",
        low: null,
        med: null,
        high: 1.95,
      },
      {
        name: "Savaloy",
        low: null,
        med: null,
        high: 1.95,
      },
    ],
  },
  {
    name: "ribs",
    items: [
      {
        name: "6oz Gourmet Burger",
        low: null,
        med: null,
        high: 4.0,
      },
      {
        name: "6oz Gourmet Cheese Burger",
        low: null,
        med: null,
        high: 4.3,
      },
    ],
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.menuHeading}>
        <Grid container justify="center">
          <Typography variant="h2">MENU</Typography>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                  {card.items.map((n) => (
                    <Typography>
                      <span>{n.name} : {n.low} {n.med} {n.high}</span>
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
