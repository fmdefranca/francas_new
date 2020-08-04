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
    name: "Fish",
    items: [
      {
        name: "Haddock",
        large: 7.15,
        medium: 6.25,
        regular: null,
      },
      {
        name: "Cod",
        large: 7.25,
        medium: 6.35,
        regular: 5.4,
      },
      {
        name: "Senior's Fish & Chips",
        large: null,
        medium: null,
        regular: 4.2,
      },
      {
        name: "Plaice",
        large: null,
        medium: null,
        regular: 6.0,
      },
      {
        name: "Scampi",
        large: null,
        medium: null,
        regular: 5.95,
      },
      {
        name: "Salt & Pepper Squid",
        large: 4.95,
        medium: null,
        regular: null,
      },
      {
        name: "Fishcake",
        large: 1.95,
        medium: null,
        regular: null,
      },
      {
        name: "Cod Roe",
        large: 1.95,
        medium: null,
        regular: null,
      },
      {
        name: "Chips",
        large: 3.2,
        medium: null,
        regular: 2.4,
      },
    ],
  },
  {
    name: "Ribs",
    items: [
      {
        name: "Rack of Ribs",
        large: 6.95,
        medium: 6.45,
        regular: null,
      },
      {
        name: "Mega Mixer",
        large: null,
        medium: 9.5,
        regular: null,
      },
      {
        name: "1 Medium Rack of Ribs & 2 pieces of Southern Fried Chicken",
        large: null,
        medium: 5.5,
        regular: null,
      },
      {
        name: "1/4 Spit Roast Chicken Mixer",
        large: null,
        medium: 5.5,
        regular: null,
      },
      {
        name: "1/2 Rack of Ribs & 1 Piece of Southern Fried Chicken",
        large: null,
        medium: null,
        regular: null,
      },
    ],
  },
  {
    name: "Chicken",
    items: [
      {
        name: "Chicken & Mushroom",
        large: null,
        medium: null,
        regular: 2.95,
      },
    ],
  },
  {
    name: "Burgers",
    items: [
      {
        name: "6oz Gourmet Burger",
        large: null,
        medium: null,
        regular: 4.0,
      },
      {
        name: "6oz Gourmet Cheese Burger",
        large: null,
        medium: null,
        regular: 4.3,
      },
      {
        name: "1/4lb Beef Burger",
        large: null,
        medium: null,
        regular: 3.2,
      },
      {
        name: "1/4 Beef Burger with Cheese",
        large: null,
        medium: null,
        regular: 3.4,
      },
      {
        name: "Chicken Burger",
        large: null,
        medium: null,
        regular: 3.4,
      },
      {
        name: "Royal Chicken Burger",
        large: null,
        medium: null,
        regular: 3.85,
      },
      {
        name: "Chicken Burger with onion rings and cheese",
        large: null,
        medium: null,
        regular: null,
      },
      {
        name: "Veggie Burger",
        large: null,
        medium: null,
        regular: 2.9,
      },
    ],
  },
  {
    name: "Pies",
    items: [
      {
        name: "Beef & Kidney",
        large: null,
        medium: null,
        regular: 2.95,
      },
      {
        name: "Steak & Kidney",
        large: null,
        medium: null,
        regular: 2.95,
      },
    ],
  },
  {
    name: "Kids",
    items: [
      {
        name: "Chicken Nuggets Meal",
        large: null,
        medium: null,
        regular: 3.85,
      },
      {
        name: "Southern Fried Chicken Meal",
        large: null,
        medium: null,
        regular: 3.85,
      },
      {
        name: "Sausage Meal",
        large: null,
        medium: null,
        regular: 3.75,
      },
      {
        name: "Saveloy Meal",
        large: null,
        medium: null,
        regular: 3.75,
      },
      {
        name: "Cod Fillet Strip Meal",
        large: null,
        medium: null,
        regular: 3.85,
      },
      {
        name: "Fishcake Meal",
        large: null,
        medium: null,
        regular: 3.75,
      },
    ],
  },
  {
    name: "Sides",
    items: [
      {
        name: "Onion Rings",
        large: null,
        medium: null,
        regular: 1.8,
      },
      {
        name: "Breaded Mushrooms",
        large: null,
        medium: null,
        regular: 1.8,
      },
      {
        name: "Bread Roll",
        large: null,
        medium: null,
        regular: 0.75,
      },
      {
        name: "Chip Roll",
        large: null,
        medium: null,
        regular: 2.4,
      },
      {
        name: "Curry Sauce",
        large: null,
        medium: null,
        regular: 1.7,
      },
      {
        name: "Mushy Peas",
        large: null,
        medium: null,
        regular: 1.7,
      },
      {
        name: "Pickled Onions",
        large: null,
        medium: null,
        regular: 0.55,
      },
      {
        name: "Pickled Egg",
        large: null,
        medium: null,
        regular: 0.7,
      },
      {
        name: "Gherkin",
        large: null,
        medium: null,
        regular: 0.7,
      },
      {
        name: "Tartare Sauce",
        large: null,
        medium: null,
        regular: 1.6,
      },
      {
        name: "Bottles of Sauce / Vinegar",
        large: null,
        medium: null,
        regular: 1.6,
      },
      {
        name: "Sauce Dips",
        large: null,
        medium: null,
        regular: 0.35,
      },
      {
        name: "Pineapple Fritter",
        large: null,
        medium: null,
        regular: 1.4,
      },
    ],
  },
  {
    name: "Sausages",
    items: [
      {
        name: "Jumbo Sausage",
        large: null,
        medium: null,
        regular: 1.95,
      },
      {
        name: "Battered Sausage",
        large: null,
        medium: null,
        regular: 1.95,
      },
      {
        name: "Savaloy",
        large: null,
        medium: null,
        regular: 1.95,
      },
    ],
  },
  {
    name: "Drinks",
    items: [
      {
        name: "Cold Cans",
        large: null,
        medium: null,
        regular: 1.0,
      },
      {
        name: "Fruit Shoots",
        large: null,
        medium: null,
        regular: 0.95,
      },
      {
        name: "Star Slush",
        large: 1.35,
        medium: 1.1,
        regular: null,
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
                      <span>
                        {n.name} : {n.large} {n.medium} {n.regular}
                      </span>
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
