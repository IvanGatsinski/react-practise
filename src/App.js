import "./App.css";
import React from "react";
import Dropdown from "./components/Dropdown";

const continents = ["Europe", "Asia", "Africa"];

const countries = {
  Europe: ["Bulgaria", "Romania", "United Kingdom", "Spain"],
  Asia: ["Kazakhstan", "India", "South Korea", "Japan"],
  Africa: ["Ghana", "Morocco", "Egypt", "Botswana"],
};

export default class App extends React.Component {
  state = {
    continent: "",
    country: "",
  };

  handleChangeData = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.continent !== this.state.continent) {
      this.setState({
        ...this.state,
        country: "",
      });
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { continent, country } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <Dropdown
          options={continents}
          selected={continent}
          name="continent"
          handleChange={this.handleChangeData}
        />
        <Dropdown
          options={countries[continent] || []}
          selected={country}
          name="country"
          handleChange={this.handleChangeData}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
