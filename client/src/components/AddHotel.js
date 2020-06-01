// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    // addHotel: (hotel) => dispatch(addHotel(hotel)),
  };
}

class HotelAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addHotel({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={this.handleChange} />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(HotelAddForm);

export default Form;
