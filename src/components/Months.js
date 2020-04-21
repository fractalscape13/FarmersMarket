import React from "react";
import availableProduce from './data/Produce.js';


class Months extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      month: null
    };
  }

  handleChange = (event) => {
    this.setState({month: event.target.value})
  }
  
  render(){
    return (
      <React.Fragment>
        <form>
          <select id="months" value={this.state.month} onChange={this.handleChange}>
            <option value="january">January</option>
          </select>
        </form>

        <h2>Available produce for </h2>
      </React.Fragment>
    );
  }
}

export default Months;

{/* <option value="0">January</option>
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
  <option value="11">December</option> */}