import { useState, useEffect } from "react";
import axios from "axios";
import { URL_FALSA, URL_REAL } from "../constants/Constants";

const UseAxios = (dataActive, dataQuery) => {
  const [axiosData, setAxiosData] = useState();

  const queryAndActiveOption = `${URL_REAL}?q={"$and": [{"ID": {"$regex" :${dataQuery}}},{"COMERCIO":{"$regex" :${dataQuery}}},{CUIT:{"$regex" :${dataQuery}}},{"Active":${dataActive}}]`,
    activeOption = `${URL_REAL}?q={"Active":${dataActive}}`,
    queryOption = `${URL_REAL}?q={"$or": [{"ID": {"$regex" :${dataQuery}}},{"COMERCIO":{"$regex" :${dataQuery}}},{CUIT:{"$regex" :${dataQuery}}}]`;

  useEffect(() => {
    const getData = async (URL) => {
      try {
        let res = await axios.get(URL).then((res) => res.data);
        setAxiosData(res);
      } catch (error) {
        console.log(error);
      }
    };

    if (dataActive && dataQuery) {
      console.log(queryAndActiveOption);
      /*       getData(queryAndActiveOption); */
    } else if (dataActive) {
      console.log(activeOption);
      /*       getData(activeOption);*/
    } else if (dataQuery) {
      console.log(queryOption);
      /* getData(queryOption); */
    } else {
      console.log(`${URL_REAL} `);
      getData(URL_FALSA);
    }

  }, [dataActive, dataQuery]);

  return { axiosData };
};
export default UseAxios;
