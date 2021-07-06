import axios from "axios";

/*  const CustomerService=()=> {
    return axios.get("http://localhost:3002/api/posts").then((res) => res.data);
  } */
  const AxiosCustomer=()=> {
    return axios.get("table.json").then((res) => res.data);
  }
  export default AxiosCustomer

  /* 
 const CustomerService=(params)=> {
    return axios
      .get("https://www.primefaces.org/data/customers", { params: params })
      .then((res) => res.data);
  } 
}
*/