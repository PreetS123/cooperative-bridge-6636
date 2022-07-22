import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../Redux/DateSelectorReducer/action";
import { Faq } from "../../Components/Faq";
import NavbarSecond from "../../Components/NavbarSecond";
function DateSelector() {
  const DateSelector = useSelector((state) => state.dateReducer.date);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDate());
  }, []);
  console.log(DateSelector);

  return (
    <div>
      <Box>
       <NavbarSecond />
      </Box>
      <Box bg="#fffdf7" p={4} margin={"auto"} insetBlock={"0"}>
        <Heading
          mb={"3rem!important"}
          fontSize="3rem"
          fontWeight={500}
          color="#000"
          boxSize={"border-box"}
        >
          Choose A Delivery Day
        </Heading>
        <div
          style={{
            width: "20em",
            overflowY: "scroll",
            height: "200px",
            borderTop: "0.1px solid #000",
            margin: "auto",
            marginBottom: "2rem",
          }}
        >
          {DateSelector.map((date) => {
            return (
              <div key={date.id}>
                <DateBorder>
                  <div>{date.date}</div>
                </DateBorder>
              </div>
            );
          })}
        </div>
        <Text fontSize="0.7rem" color="#000">
          Scroll for more delivery dates
        </Text>
        <Button
          w="20em"
          bg="blue"
          color="white"
          borderRadius="0%"
          variant="outline"
          size="md"
          mt="2rem"
          mb={"2rem"}
        >
          Next
        </Button>
        <Text fontSize="0.7rem" fontWeight={"660"} color="#000">
          First Delivery Date: Monday, Jul 25
        </Text>
        <br />
        <br />
        <hr />
        <Box>
          <Faq />
        </Box>
      </Box>
    </div>
  );
}
export default DateSelector;
const DateBorder = styled.div`
  border: 0.1px solid black;
  border-top: 0px;
  text-align: left;
  padding: 5px;
  background-color: white;
`;
