import React from "react";
import { Select, Box } from "@chakra-ui/react";

const FilterActive = ({ setActivityvalue }) => { 
  //Se guarda el valor de activo
  const handleChange = (e) => { 
    setActivityvalue(e.target.value);
  };

  return (
    <Box w="20%" m="10">
      <Select placeholder="Elija una opcion" onChange={handleChange}>
        <option value="">Todos</option>
        <option value="1">Activo</option>
        <option value="0">Inactivo</option>
      </Select>
    </Box>
  );
};

export default FilterActive;
