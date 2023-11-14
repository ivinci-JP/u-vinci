
// lib
import axios from "axios";
import PropTypes from "prop-types";
import { Marker } from "@react-google-maps/api";

const ShopMarkers = ({ setDetailedShopId }) => {
  
  axios.get(
    `http://localhost:4000/restaurantLocation`
  ).then(response => {
        const  shops  = response.data;
        console.log(response)

        return shops.map(({ lat, lng, id }) => (
          <Marker
            position={{ lat, lng }}
            key={id}
            onClick={() => {
              setDetailedShopId(id);
            }}
          />
        ));
      }
  );

  ShopMarkers.propTypes = {
    setDetailedShopId: PropTypes.func.isRequired,
  };
}

export default ShopMarkers;