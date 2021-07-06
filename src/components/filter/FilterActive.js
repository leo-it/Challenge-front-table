import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

const FilterActive = () => {
    const active = ()=>{

    }
    const inactive = ()=>{
        
    }
  return (
    <>
    {/* hacerlo select */}
      <Button onClick={active}>Activos</Button>
      <Button onClick={inactive}>No activos</Button>
      {/* button todos */}
    </>
  );
};

export default FilterActive;
