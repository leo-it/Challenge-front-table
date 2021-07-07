import { useState, useEffect } from "react";

import axios from "axios";
import { URL, URL_REAL } from "../constants/Constants";

const UseAxios = (dataActive, dataQuery) => {
  const [axiosData, setAxiosData] = useState();
  useEffect(() => {
    if (dataActive && dataQuery) {
      console.log(
        `${URL_REAL}?q={"query":${dataQuery}}{"Active":${dataActive}}`
      );
    } else if (dataActive) {
      console.log(`${URL_REAL}?q={"Active":${dataActive}} `);
    } else if (dataQuery) {
      console.log(`${URL_REAL}?q={"query":${dataQuery}}`);
    } else {
      console.log(`${URL_REAL} `);
    }
    const getData = async () => {
      try {
        let res = await axios.get(`${URL}`).then((res) => res.data);
        setAxiosData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [dataActive, dataQuery]);

  return { axiosData };
};
export default UseAxios;

/* 
 const CustomerService=(params)=> {
    return axios
      .get("https://www.primefaces.org/data/customers", { params: params })
      .then((res) => res.data);
  } 
}
*/
