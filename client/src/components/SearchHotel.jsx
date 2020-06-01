import React, { Component } from "react";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import Text from "@tds/core-text";
import HotelList from "./HotelList";
import DatePicker from "@tds/community-date-picker";
import moment from "moment";
import Strong from "@tds/core-strong";
import Select from "@tds/core-select";
import Card from "@tds/core-card";
import Spinner from "@tds/core-spinner";
import Button from "@tds/core-button";
import Posts from "./Posts";
import { getSearchData, getData, searchHotel, searcedAction } from "../js/actions";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    searchHotel: (hotel) => dispatch(getSearchData(hotel["destination"])),
    searchedAction: (searchClicked) => dispatch(searcedAction(searchClicked))
  };
}

class SearchHotel extends Component {
  searchClicked = false;
  constructor(props) {
    super(props);
    this.state = {
      destination: "MAD",
    };
    this.onSearchClick = this.onSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSearchClick = (event) => {
    event.preventDefault();
    const { destination } = this.state;
    this.props.searchHotel({ destination });
    this.props.searchedAction(true)
    this.setState({ destination: destination });
    this.searchClicked = true;
  };

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <FlexGrid>
            <FlexGrid.Row horizontalAlign="start">
              <FlexGrid.Col xs={4} md={10}>
                <Box vertical={2}>
                  <Select
                    label="Destination"
                    placeholder="Please select..."
                    id="destination"
                    options={[
                      { text: "Sydney", value: "SYD" },
                      { text: "London", value: "LON" },
                      { text: "Bangkok", value: "BKK" },
                      { text: "Madagascar", value: "MAD" },
                    ]}
                    value={this.state.destination}
                    onChange={this.handleChange}
                  />
                </Box>
              </FlexGrid.Col>
              <FlexGrid.Col xs={4} md={2}>
                <Box vertical={4}>
                  {/* <Spinner spinning={this.searchClicked == true? true:false} size="small" variant="secondary" label="Request is processing." inline> */}
                    <Button variant="secondary" onClick={this.onSearchClick}>
                      Search
                    </Button>
                  {/* </Spinner> */}
                </Box>
              </FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid>
        </Card>
        <Posts searchClicked={this.searchClicked} />
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  if (state.searchResultHotels.length == 0) {
    return {
      hotels: state.remoteHotels.slice(0, 20),
    };
  } else {
    this.searchClicked = false
    return {
      hotels: state.searchResultHotels.slice(0, 20),
    };
  }
}
const HotelSearch = connect(mapStateToProps, mapDispatchToProps)(SearchHotel);

export default HotelSearch;
