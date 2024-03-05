// lib
import PropTypes from "prop-types";
import { Avatar, Button, Typography, makeStyles } from "@material-ui/core";

// assets
// react-scripts 4.x -> 5.x アップデートにおいてSVG読み込みに失敗するようになったため対応。
// https://github.com/facebook/create-react-app/issues/11770#issuecomment-1022024494
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import UVinci from "!file-loader!../../assets/UVinci.svg";

const useStyles = makeStyles(() => ({
  logo: {
    marginRight: 10
  }
}));

const LikeButton = ({ handleLike }) => {
  const classes = useStyles();

  return (
    <Button
      onClick={handleLike}
      startIcon={
        <Avatar
          variant="square"
          src={UVinci}
          alt="logo"
          className={classes.logo}
        />
      }
      variant="contained"
      color="primary"
    >
      <Typography variant="button" noWrap>
        米ん人になる
      </Typography>
    </Button>
  );
};

LikeButton.propTypes = {
  handleLike: PropTypes.func.isRequired
};

export default LikeButton;
