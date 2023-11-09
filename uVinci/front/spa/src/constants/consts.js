const CONSTS = {
  APP_NAME: "u-Vinci",
  APP_TAGLINE: "〜日本の豊かな田から取れた栄養のある米を〜",
  DEFAULT_SPACE: 2,
  INITIAL_POSITION: {
    lat: 35.692973,
    lng: 139.761738,
  },
  INITIAL_ZOOM: 18,
  RESTAURANTS_PATHNAME: "restaurants",
  LIKE_PATHNAME: "like",
  RESTAURANTPATH: `http://${process.env.REACT_APP_API_HOSTNAME}/restaurants`
};

export default CONSTS;
