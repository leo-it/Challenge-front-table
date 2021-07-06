import React,{useState} from "react";
import { Input, Center, Box,Button } from "@chakra-ui/react";

export const SearchBox = () => {
const [search, setSearch] = useState()
const searchField =()=>{
    //fetch
    console.log("search");
}
console.log(search);
  return (
    <div>
      <Box m="10">
        <Center>
          <Input
          name="search"
            placeholder="Buscar"
            onChange={(event) => {
                setSearch(event.target.value);
            }}
          />
          <Button onClick={searchField}>Search</Button>
        </Center>
      </Box>
    </div>
  );
};
export default SearchBox;
