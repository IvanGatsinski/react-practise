import "./App.css";
import React from "react";
import Dropdown from "./components/Dropdown";
import InputText from "./components/InputText";

const continents = ["Europe", "Asia", "Africa"];

const countries = {
  Europe: ["Bulgaria", "Romania", "United Kingdom", "Spain"],
  Asia: ["Kazakhstan", "India", "South Korea", "Japan"],
  Africa: ["Ghana", "Morocco", "Egypt", "Botswana"],
};

export default class App extends React.Component {
  state = {
    name: "",
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
    const { name, continent, country } = this.state;
    return (
      <>
        <div>
          <h1>State:</h1>
          <h2>Name: {name}</h2>
          <h2>Continent: {continent}</h2>
          <h2>Country: {country}</h2>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <InputText
            label="Name"
            name="name"
            value={name}
            handleChange={this.handleChangeData}
          />
          <br /><br />
          <Dropdown
            label="Continent"
            options={continents}
            selected={continent}
            name="continent"
            handleChange={this.handleChangeData}
          />
          <br /><br />
          <Dropdown
            label="Country"
            options={countries[continent] || []}
            selected={country}
            name="country"
            handleChange={this.handleChangeData}
          />
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
