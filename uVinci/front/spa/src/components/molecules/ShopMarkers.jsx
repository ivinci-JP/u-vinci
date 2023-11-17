// lib
import PropTypes from "prop-types";
import { Marker } from "@react-google-maps/api";

const ShopMarkers = ({ setDetailedShopId, shops }) => 

   shops.map(({ lat, lng, id }) => (
    <Marker
      position={{ lat, lng }}
      key={id}
      onClick={() => {
        setDetailedShopId(id);
      }}
    />
  ));


ShopMarkers.propTypes = {
  setDetailedShopId: PropTypes.func.isRequired
};

export default ShopMarkers;
