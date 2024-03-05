// Material UI
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

// assets
// react-scripts 4.x -> 5.x アップデートにおいてSVG読み込みに失敗するようになったため対応。
// https://github.com/facebook/create-react-app/issues/11770#issuecomment-1022024494
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import UVinci from "!file-loader!../../assets/UVinci.svg";

// consts
import CONSTS from "../../constants/consts";

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
