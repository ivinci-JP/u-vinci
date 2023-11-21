import axiosInstance from "../client/index.mjs";

// consts
import CONSTS from "../constants/consts";

const getShopList = (setShops, setIsShopListLoaded) => {
  axiosInstance()
    .get(`${CONSTS.MOCK_API_HOSTNAME}/${CONSTS.RESTAURANTS_PATHNAME}?id=`)
    .then((response) => {
      setShops(response.result);
      setIsShopListLoaded(true);
    });
};

const getShopDetails = (
  setLatestComentoes,
  setShopName,
  setShopAccess,
  setShopUrl,
  setShopTagline,
  detailedShopId
) => {
  axiosInstance()
    .get(
      `${CONSTS.MOCK_API_HOSTNAME}/${CONSTS.RESTAURANTS_PATHNAME}?id=${
        detailedShopId ?? ""
      }`
    )
    .then((response) => {
      const { name, comentoes, access, catch: tagline, url } = response.result;

      setLatestComentoes(comentoes);
      setShopName(name);
      setShopAccess(access);
      setShopUrl(url);
      setShopTagline(tagline);
    });
};

export default { getShopDetails, getShopList };
