import React from "react";
import { Input, Center, Box,Button } from "@chakra-ui/react";

export const SearchBox = ({setQuery}) => {

/* const handleClick =()=>{
  setQuery()
} */
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
{/*           <Button onClick={handleClick}>Search</Button>
 */}        </Center>
      </Box>
    </div>
  );
};
export default SearchBox;
