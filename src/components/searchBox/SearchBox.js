import React from "react";
import { Input, Center, Box, Button } from "@chakra-ui/react";

export const SearchBox = ({ setQuery }) => {
  return (
    <div>
      <Box w="50%" m="10">
        <Center>
          <Input
            name="search"
            placeholder="Buscar"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </Center>
      </Box>
    </div>
  );
};
export default SearchBox;
