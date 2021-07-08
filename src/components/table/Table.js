import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import { ArrowUpDownIcon } from "@chakra-ui/icons";

const TableCommerce = ({
  currentItems,
  setSaveIdOrCUIT,
  setIdOrCuitidOrCuitStatus,
  idOrCuitStatus,
}) => {
  // guarda el value "id" o "CUIT" y guarda un estado true o false que va a servir para el useeffect del sort
  const handleClick = (e) => {
    idOrCuitStatus
      ? setIdOrCuitidOrCuitStatus(false)
      : setIdOrCuitidOrCuitStatus(true);
    setSaveIdOrCUIT(e);
  };

  return (
    <>
      <Box>
        <Table variant="striped" borderRadius={20}>
          <Thead>
            <Tr>
              <Th
                onClick={(e) => {
                  handleClick("id");
                }}
              >
                id <ArrowUpDownIcon />
              </Th>
              <Th>Comercio</Th>

              <Th
                onClick={(e) => {
                  handleClick("CUIT");
                }}
              >
                CUIT <ArrowUpDownIcon />
              </Th>
              <Th>Concepto 1</Th>
              <Th>Concepto2</Th>
              <Th>Concepto 3</Th>
              <Th>Concepto 4</Th>
              <Th>Concepto 5</Th>
              <Th>Concepto 6</Th>
              <Th>Balance actual</Th>
              <Th>Activo</Th>
              <Th>Ultima Venta</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItems ? (
              currentItems.map((element) => (
                <Tr key={element.id}>
                  <Td>{element.id}</Td>
                  <Td>{element.Comercio}</Td>
                  <Td>{element.CUIT}</Td>
                  <Td>{element.Concepto1}</Td>
                  <Td>{element.Concepto2}</Td>
                  <Td>{element.Concepto3}</Td>
                  <Td>{element.Concepto4}</Td>
                  <Td>{element.Concepto5}</Td>
                  <Td>{element.Concepto6}</Td>
                  <Td>{element.BalanceActual}</Td>
                  <Td>{element.Activo ? <p>Activo</p> : <p>Inactivo</p>}</Td>
                  <Td>{element.UltimaVenta}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td>
                  <h1>Sin datos.</h1>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};
export default TableCommerce;
