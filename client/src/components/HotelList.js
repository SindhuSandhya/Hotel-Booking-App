import React, { Component } from "react";
import Testimonial from "@tds/community-testimonial";
import Image from "@tds/core-image";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import Card from "@tds/core-card";
import Ribbon from "@tds/community-ribbon";
import HairlineDivider from "@tds/core-hairline-divider";
import { connect } from "react-redux";


const mapStateToProps = state => {
  return { hotels: state.hotels };
};

const HotelList = ({ hotels }) => (
  <ul>
    {hotels.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);


const List = connect(mapStateToProps)(HotelList);

export default List;
