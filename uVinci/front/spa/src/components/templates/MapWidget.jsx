// lib
import { memo, useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { CircularProgress } from "@material-ui/core";

// consts
import CONSTS from "../../constants/consts";

// components
import ShopMarkers from "../molecules/ShopMarkers";
import ShopDetail from "../organisms/ShopDetail";

const containerStyle = {
  height: "100%",
  width: "100%",
};

const MapWidget = () => {
  const [detailedShopId, setDetailedShopId] = useState(null);
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const onLoad = useCallback((initiatedMap) => {
    setMap(initiatedMap);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      {detailedShopId != null && (
        <ShopDetail
          detailedShopId={detailedShopId}
          setDetailedShopId={setDetailedShopId}
        />
      )}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={CONSTS.INITIAL_POSITON}
        zoom={CONSTS.INITIAL_ZOOM}
        onBoundsChanged={() => {
          console.log(map.getBounds());
        }}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <ShopMarkers setDetailedShopId={setDetailedShopId} />
      </GoogleMap>
    </>
  ) : (
    <CircularProgress />
  );
};

export default memo(MapWidget);
