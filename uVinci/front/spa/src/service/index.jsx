import { get, post } from "../client/index";
import CONSTS from "../constants/consts";

const getShopList = () => {
  const response = get({
    path: CONSTS.RESTAURANTS_PATHNAME
  });

  return response;
};

const getShopDetails = (detailedShopId) => {
  const response = get({
    path: CONSTS.RESTAURANTS_PATHNAME,
    queryParam: {
      key: CONSTS.DETAILEDSHOP_QUERYPARAMNAME,
      value: detailedShopId
    }
  });

  return response;
};

const becomeComento = (detailedShopId, like, data) => {
  const response = post({
    path: CONSTS.RESTAURANTS_PATHNAME,
    pathParam: detailedShopId,
    like,
    data
  });

  return response;
};

export default { getShopDetails, getShopList, becomeComento };
