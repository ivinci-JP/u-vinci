// lib
import PropTypes from "prop-types";
import { Marker } from "@react-google-maps/api";

// consts
import CONSTS from "../../constants/consts";

// stub
import uVinciAPIStub from "../../stub/uVinciAPIStub";

const ShopMarkers = ({ setDetailedShopId }) => {
  const { result: shops } = uVinciAPIStub.get(
    `http://${process.env.REACT_APP_API_HOSTNAME}/${CONSTS.RESTAURANTS_PATHNAME}`
  );

  return shops.map(({ lat, lng, id }) => (
    <Marker
      position={{ lat, lng }}
      key={id}
      onClick={() => {
        setDetailedShopId(id);
      }}
    />
  ));
};

ShopMarkers.propTypes = {
  setDetailedShopId: PropTypes.func.isRequired,
};

export default ShopMarkers;
