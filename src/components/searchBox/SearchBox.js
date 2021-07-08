import React from "react";
import { Input, Center, Box } from "@chakra-ui/react";

export const SearchBox = ({ setSearchboxquery }) => {
  //guardo el value de la searchbox
  return (
    <div>
      <Box w="50%" m="10">
        <Center>
          <Input
            name="search"
            placeholder="Buscar"
            onChange={(event) => {
              setSearchboxquery(event.target.value);
            }}
          />
        </Center>
      </Box>
    </div>
  );
};
export default SearchBox;
