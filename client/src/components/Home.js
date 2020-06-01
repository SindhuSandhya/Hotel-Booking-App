import React from "react";
import SearchHotel from "./SearchHotel";
import Box from "@tds/core-box";
import Strong from "@tds/core-strong";
import {Car} from "@tds/core-decorative-icon";
import '../scss/Home.scss'
import HotelSearch from "./SearchHotel";

const Home = () => {
  return (
    <React.Fragment>
      <Box className="navColor" inline vertical={3} between={2}>
      <Car variant="inverted" copy="en" />
        <Strong>iTravel</Strong>
      </Box>
      <HotelSearch />
    </React.Fragment>
  );
};

export default Home;
