import React, { useEffect } from 'react';
import axios from 'axios';
const useAxios = async (configRequest) => {
  axios.defaults.baseURL = 'http://localhost:3100/';
  useEffect(() => {
    fetchDataUsingAxios(configRequest);
  }, []);
  const fetchDataUsingAxios = async () => {
    await axios.request(configRequest);
  };
};
export default useAxios;
