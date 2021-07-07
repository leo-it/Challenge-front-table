import "./App.css";
import React, { useState } from "react";
import ScreenTable from "./components/Screens/Screen";
import UseAxios from "./services/Axios";

function App() {
  const [dataActive, setDataActive] = useState("");
  const [dataQuery, setDataQuery] = useState("");
  const { axiosData } = UseAxios(dataActive, dataQuery);
  return (
    //puedo hacer un if que si trae info de una api bien, si no use el dummy.
    <div className="App">
      {axiosData ? (
        <>
          <ScreenTable
            axiosData={axiosData}
            setDataActive={setDataActive}
            setDataQuery={setDataQuery}
          />
        </>
      ) : (
        <>
          <h1>cargando...</h1>
        </>
      )}
    </div>
  );
}

export default App;
