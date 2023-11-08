// lib
import PropTypes from "prop-types";
import { Avatar, Button, Typography, makeStyles } from "@material-ui/core";

// assets
import UVinci from "../../assets/UVinci.svg";

const useStyles = makeStyles(() => ({
  logo: {
    marginRight: 10,
  },
}));

const LikeButton = ({ handleLike ,isComent}) => {
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
      {isComent ? 
        <Typography variant="button" noWrap>
            米ん人をやめる
        </Typography>
          :
          <Typography variant="button" noWrap>
          米ん人になる
        </Typography>
      }
    </Button>
  );
};

LikeButton.propTypes = {
  handleLike: PropTypes.func.isRequired,
  isComent: PropTypes.bool.isRequired
};

export default LikeButton;
