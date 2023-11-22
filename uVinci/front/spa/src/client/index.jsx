import axios from "axios";

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

const get = (path, pathParam, queryParam) => axiosInstance().get(`${path}/${pathParam}/${queryParam}`);

export default get;
