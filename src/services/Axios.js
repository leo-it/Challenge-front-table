import { useState, useEffect } from "react";

import axios from "axios";
import { URL } from "../constants/Constants";

const UseAxios = () => {
  const [axiosData, setAxiosData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get(URL).then((res) => res.data);
        setAxiosData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

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
