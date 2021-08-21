import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        personName: "",
        personOccupation: "",
      },
    };

    this.handleFormData = this.handleFormData.bind(this);
  }

  handleFormData(fieldData) {
    this.setState({
      formData: {
        ...this.state.formData,
        ...fieldData,
      },
    });
  }

  render() {
    return (
      <div className="app__container">
        <Form
          data={this.state.formData}
          onInputsChange={this.handleFormData}
        />
        <Form
          data={this.state.formData}
          onInputsChange={this.handleFormData}
        />
      </div>
    );
  }
}

export default App;
