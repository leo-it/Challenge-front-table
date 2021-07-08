import { useState, useEffect } from "react";
import axios from "axios";
import { URL_DUMMY, URL_COMMERCES } from "../constants/Constants";

const UseAxios = (activityData, dataQuery) => { 
  const [axiosData, setAxiosData] = useState(); 

  const queryAndActiveOption = `${URL_COMMERCES}?q={"$and": [{"ID": {"$regex" :${dataQuery}}},{"COMERCIO":{"$regex" :${dataQuery}}},{CUIT:{"$regex" :${dataQuery}}},{"Active":${activityData}}]`,
    activeOption = `${URL_COMMERCES}?q={"Active":${activityData}}`,
    queryOption = `${URL_COMMERCES}?q={"$or": [{"ID": {"$regex" :${dataQuery}}},{"COMERCIO":{"$regex" :${dataQuery}}},{CUIT:{"$regex" :${dataQuery}}}]`;

  useEffect(() => {
    const getData = async (URL) => {
      try {
        let res = await axios.get(URL).then((res) => res.data);
        setAxiosData(res);
      } catch (error) {
        console.log(error);
      }
    };

    if (activityData && dataQuery) {
      console.log(queryAndActiveOption);
      /*       getData(queryAndActiveOption); */
    } else if (activityData) {
      console.log(activeOption);
      /*       getData(activeOption);*/
    } else if (dataQuery) {
      console.log(queryOption);
      /* getData(queryOption); */
    } else {
      console.log(`${URL_COMMERCES} `);
      getData(URL_DUMMY);
    }

  }, [activityData, dataQuery]);

  return { axiosData };
};
export default UseAxios;
