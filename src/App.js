import "./App.css";
import React, { Component } from "react";
import SimpleFormOne from "./components/SimpleFormOne";
import SimpleFormTwo from "./components/SimpleFormTwo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personName: "",
      personOccupation: "",
    };

    this.handleFormData = this.handleFormData.bind(this);
  }

  handleFormData(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <div className="app__container">
        <SimpleFormOne data={this.state} onInputsChange={this.handleFormData} />
        <SimpleFormTwo data={this.state} onInputsChange={this.handleFormData} />
      </div>
    );
  }
}

export default App;
