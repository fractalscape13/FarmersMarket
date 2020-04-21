import React from "react";
import availableProduce from './data/Produce.js';


class Months extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      produce: {}
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    this.state.produce = availableProduce[this.state.value].selection;
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            <select id="months" value={this.state.value} onChange={this.handleChange}>
              <option value="0">January</option>
              <option value="1">February</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6">July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
          </select>
          </label>
        <input type="submit" value="Submit" />
        </form>

      <h2>Available produce for </h2>
      <ProduceDisplayComponent 
      // state object gets passed through this component to display it
        produce = {this.state.produce}
      />
      </React.Fragment >
    );
  }
}

export default Months;

