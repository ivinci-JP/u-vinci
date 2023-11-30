// lib
import { memo, useCallback, useEffect, useState} from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { CircularProgress } from "@material-ui/core";
import { useCookies } from 'react-cookie';

// consts
import CONSTS from "../../constants/consts";

// components
import ShopMarkers from "../molecules/ShopMarkers";
import ShopDetail from "../organisms/ShopDetail";

// service
import request from "../../service/index";
import authStub from "../../stub/authStub";

const containerStyle = {
  height: "100%",
  width: "100%"
};

const MapWidget = () => {
  const [detailedShopId, setDetailedShopId] = useState(null);
  const [mapView, setMapView] = useState(null);
  const [isShopListLoaded, setIsShopListLoaded] = useState(false);
  const [shops, setShops] = useState();
  const [cookies, setCookie] = useCookies(['authentication']);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  useEffect(() => {
    setCookie('user', `{"id": "${authStub.getUser().id}", "name": "${authStub.getUser().name}"}`,{path : '/'});
    setCookie('token', authStub.getToken(),{path : '/'}) ;

  },[cookies, setCookie])

  const onLoad = useCallback((initiatedMap) => {
    setMapView(initiatedMap);
   }, []);

  const onUnmount = useCallback(() => {
    setMapView(null);
  }, []);

  useEffect(() => {
    const getShopList = async () => {
      const response = await request.getShopList();
      setShops(response.result);
      setIsShopListLoaded(true);
    };
    getShopList();
  }, [isLoaded]);

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
        center={CONSTS.INITIAL_POSITION}
        zoom={CONSTS.INITIAL_ZOOM}
        onBoundsChanged={() => {
          console.log(mapView.getBounds());
        }}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {isShopListLoaded && (
          <ShopMarkers shops={shops} setDetailedShopId={setDetailedShopId} />
        )}
      </GoogleMap>
    </>
  ) : (
    <CircularProgress />
  );
};

export default memo(MapWidget);
