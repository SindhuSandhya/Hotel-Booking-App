import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../js/actions/index";
import Testimonial from "@tds/community-testimonial";
import Image from "@tds/core-image";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import Card from "@tds/core-card";
import Strong from "@tds/core-strong";
import Link from "@tds/core-link";
import "../scss/Posts.scss";
import Spinner from "@tds/core-spinner";
import StarRatingComponent from "react-star-rating-component";
import MapContainer from "./Gmaps.js";
export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }


  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.loading) {
      return (
        <div align="center">
          <Spinner spinning variant="secondary" inline />
        </div>
      );
    } else {
      return (
        <>
        <ul>
          <div style={{ height: 500, overflowY: "auto", width: "100%" }}>
            {this.props.hotels.map((el) => (
              <Card spacing="compact">
                <FlexGrid>
                  <FlexGrid.Row horizontalAlign="start">
                    <FlexGrid.Col xs={4} md={2}>
                      {((el || {}).hotel || {}).media?.map((item, index) => (
                        <div key={item.uri}>
                          <Box vertical={2}>
                            <Image src="https://q-cf.bstatic.com/images/hotel/max1024x768/889/88985674.jpg" rounded="corners" width={300} height={300} alt="Image of co-workers collaborating" />
                          </Box>
                        </div>
                      ))}
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={4} md={4}>
                      <Box>
                        <Box>
                          <Testimonial testimonialStyle="heading2" title={((el || {}).hotel || {}).name} />
                          <StarRatingComponent name="rate2" editing={false} starCount={5} value={((el || {}).hotel || {}).rating} />
                          {/* <Ribbon>{((el || {}).hotel || {}).rating}</Ribbon> */}
                        </Box>
                        <Box inline between={4}>
                          <h6>
                            {((el || {}).hotel || {}).address?.lines?.map((item) => (
                              <span>{item}</span>
                            ))}{" "}
                          </h6>
                          <span>|</span>
                          <Link href="#"><Strong>Book Now!</Strong>!</Link>
                        </Box>
                        <Box inline between={2}>
                          {((el || {}).hotel || {}).amenities.map((item, index) => (
                            <div>
                              {index <= 3 ? (
                                <span className="amenitiesStyle">
                                  {item}
                                  <span>|</span>
                                </span>
                              ) : null}
                            </div>
                          ))}
                        </Box>
                      </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={4} md={6}>
                      <MapContainer/>
                    </FlexGrid.Col>
                  </FlexGrid.Row>
                </FlexGrid>
              </Card>
            ))}
          </div>
        </ul>
        </>
      );
    }
  }
}
function mapStateToProps(state) {
  if (state.searchResultHotels.length == 0) {
    return {
      hotels: state.remoteHotels.slice(0, 20),
      loading: state.loading
    };
  } else {
    return {
      hotels: state.searchResultHotels.slice(0, 20),
      loading: state.loading
    };
  }
}

export default connect(mapStateToProps, { getData })(Post);
