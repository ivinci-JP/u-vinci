import  {requestShopList, requestShopDetails}  from "../client/index.mjs";


const getShopList = () => {
  const shopList = requestShopList();

  return shopList;
};

const getShopDetails = (detailedShopId) => {
  const response = requestShopDetails(detailedShopId);

  return response;
};

export default { getShopDetails, getShopList };
