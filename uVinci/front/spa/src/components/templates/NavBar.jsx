// Material UI
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

// consts
import CONSTS from "../../constants/consts";

// assets
import UVinci from "../../assets/UVinci.svg";

const useStyles = makeStyles(() => ({
  logo: {
    maxWidth: 40,
    marginRight: 10
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <img src={UVinci} alt="logo" className={classes.logo} />
          <Typography variant="h6">
            {CONSTS.APP_NAME}
            {CONSTS.APP_TAGLINE}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
