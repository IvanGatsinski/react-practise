import React from "react";
import Title from "./Title";
import Dropdown from "./utils/Dropdown";
import InputText from "./utils/InputText";

export default class ClassForm extends React.Component {
  state = {
    name: "",
    continent: "",
    country: "",
  };
  handleInputs = (e) => {
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
    const { continents, countries } = this.props;
    return (
      <>
        <Title name={name} continent={continent} country={country} />
        <form onSubmit={this.handleFormSubmit}>
          <InputText
            label="Name"
            name="name"
            value={name}
            handleChange={this.handleInputs}
          />
          <br />
          <br />
          <Dropdown
            label="Continent"
            options={continents}
            selected={continent}
            name="continent"
            handleChange={this.handleInputs}
          />
          <br />
          <br />
          <Dropdown
            label="Country"
            options={countries[continent] || []}
            selected={country}
            name="country"
            handleChange={this.handleInputs}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
