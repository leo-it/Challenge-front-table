import "./App.css";
import React from "react";
import ScreenTable from "./components/Screens/Screen";
import UseAxios from "./services/Axios";


function App() {

const {axiosData} = UseAxios()
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
