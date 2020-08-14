import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#2C3A47",
    padding: theme.spacing(8),
  },
}));

function Copyright() {
  return (
    <Typography color="textSecondary">
      {"© "}
      {new Date().getFullYear()}
      {" "}
      <Link color="inherit" href="https://material-ui.com/">
        Franca's Fish &amp; Chips | Designed by deFranca
      </Link>
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
