// lib
import PropTypes from "prop-types";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

// components and consts
import LikeButton from "../atoms/LikeButton";

const ComentoesList = ({ comentoes, handleLike }) => (
  <>
    <Typography variant="h5" display="inline">
      米ん人一覧
    </Typography>

    <List aria-label="comentoes list">
      {comentoes.map((comento) => (
        <ListItem key={comento.id}>
          <ListItemText primary={comento.name} />
        </ListItem>
      ))}
    </List>
    <LikeButton handleLike={handleLike} />
  </>
);

ComentoesList.propTypes = {
  comentoes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  handleLike: PropTypes.func.isRequired
};

export default ComentoesList;
