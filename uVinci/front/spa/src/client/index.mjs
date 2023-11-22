import axios from "axios";
import CONSTS from "../constants/consts";

const axiosInstance = () => {
  const tmpAxiosInstance = axios.create();

  tmpAxiosInstance.interceptors.response.use((tmp) => {
    const result = {
      result: tmp.data.result,
      status: tmp.status,
      message: tmp.message
    };

    return result;
  });

  return tmpAxiosInstance;
};

const requestShopList = () => 
     axiosInstance().get(
    `${CONSTS.MOCK_API_HOSTNAME}/${CONSTS.RESTAURANTS_PATHNAME}?id=`
  );

const requestShopDetails = (detailedShopId) => 
      axiosInstance().get(
        `${CONSTS.MOCK_API_HOSTNAME}/${CONSTS.RESTAURANTS_PATHNAME}?id=${
          detailedShopId ?? ""
        }`
      );

export  {requestShopList, requestShopDetails};
