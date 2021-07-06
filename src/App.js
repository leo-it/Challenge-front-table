import "./App.css";
import React, { useState, useEffect } from "react";
import TableCommerce from "./components/table/Table";
import ScreenTable from "./components/Screens/Screen";
import AxiosCustomer from "./services/Axios";


function App() {
  const [axiosData, setAxiosData] = useState(null);
  useEffect(() => {
    AxiosCustomer().then((data) => setAxiosData(data));
  }, []);

  return (
    //puedo hacer un if que si trae info de una api bien, si no use el dummy.
    <div className="App">
      {axiosData ? (
        <>
          <ScreenTable axiosData={axiosData} />
        </>
      
      ) : (
        <>
          <h1>cargando</h1>
        </>
      )}
     
    </div>
  );
}

export default App;
