import axios from "axios";
import CONSTS from "../constants/consts";

const axiosInstance = () => {
  const client = axios.create();

  client.interceptors.response.use((tmp) => {
    const result = {
      result: tmp.data.result,
      status: tmp.status,
      message: tmp.message
    };

    return result;
  });

  return client;
};

const get = ({ path, queryParam }) => {
  const baseUrl = `${CONSTS.MOCK_API_HOSTNAME}/${path}`;
  const requestUrl = queryParam
    ? `${baseUrl}?${queryParam.key}=${queryParam.value}`
    : baseUrl;

  return axiosInstance().get(requestUrl);
};
export default get;
