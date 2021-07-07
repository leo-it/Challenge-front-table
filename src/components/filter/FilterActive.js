import React, { useState } from "react";
import { Select, Box } from "@chakra-ui/react";

const FilterActive = ({ setValueActive }) => {
  const handleActive = (e) => {
    setValueActive(e.target.value);
  };

  return (
    <Box w="20%" m="10">
      <Select placeholder="Elija una opcion" onChange={handleActive}>
        <option value="">Todos</option>
        <option value="1">Activo</option>
        <option value="0">Inactivo</option>
      </Select>
    </Box>
  );
};

export default FilterActive;
