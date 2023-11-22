import get from "../client/index";
import CONSTS from "../constants/consts";

const getShopList = () => {
  const response = get(CONSTS.MOCK_API_HOSTNAME, CONSTS.RESTAURANTS_PATHNAME, CONSTS.DETAILEDSHOP_QUERYPARAMNAME);

  return response;
};

const getShopDetails = (detailedShopId) => {
  const detailedShopQueryParam = CONSTS.DETAILEDSHOP_QUERYPARAMNAME + detailedShopId
  const response = get(CONSTS.MOCK_API_HOSTNAME, CONSTS.RESTAURANTS_PATHNAME, detailedShopQueryParam);

  return response;
};

export default { getShopDetails, getShopList };
