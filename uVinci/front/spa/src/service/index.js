import { requestShopList, requestShopDetails } from "../client/index.mjs";

const getShopList = () => {
  const response = requestShopList();

  return response;
};

const getShopDetails = (detailedShopId) => {
  const response = requestShopDetails(detailedShopId);

  return response;
};

export default { getShopDetails, getShopList };
