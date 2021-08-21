import React, { Component } from "react";

export default class SimpleFormOne extends Component {
  constructor(props) {
    super(props);

    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(e) {
    this.props.onInputsChange({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          Form one
          <div>
            <label>Name:</label>
            <input
              name="personName"
              value={this.props.data.personName}
              onChange={this.handleInputs}
              type="text"
            />
          </div>
          <div>
            <label>Occupation:</label>
            <input
              name="personOccupation"
              value={this.props.data.personOccupation}
              onChange={this.handleInputs}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}
