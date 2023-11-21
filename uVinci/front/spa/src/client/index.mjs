import axios from "axios";

const axiosInstance = () => {
    const tmpAxiosInstance = axios.create();

    tmpAxiosInstance.interceptors.response.use((tmp) => {
      const result = {
        result: tmp.data.result
      };
    
      return result;
    });

    return tmpAxiosInstance;
}

export default axiosInstance;