import axiosInstance from "../client/index.mjs";

// consts
import CONSTS from "../constants/consts";

const getShopList =  () => {
      const shopList = axiosInstance()
                      .get(`${CONSTS.MOCK_API_HOSTNAME}/${CONSTS.RESTAURANTS_PATHNAME}?id=`)
      

      return shopList;
};

const getShopDetails = (detailedShopId) => {
 const response = axiosInstance()
    .get(
      `${CONSTS.MOCK_API_HOSTNAME}/${CONSTS.RESTAURANTS_PATHNAME}?id=${
        detailedShopId ?? ""
      }`
    )

    return response;
};

export default { getShopDetails, getShopList };
