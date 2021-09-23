import { useState, useEffect } from "react";
import Title from "./Title";
import Dropdown from "./utils/Dropdown";
import InputText from "./utils/InputText";

export default function HooksForm({ continents, countries }) {
  const [state, setState] = useState({
    name: "",
    continent: "",
    country: "",
  });

  const { name, continent, country } = state;

  useEffect(() => {
    setState((prevState) => {
      return {
        ...prevState,
        country: "",
      };
    });
  }, [continent]);

  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <>
      <Title name={name} continent={continent} country={country} />
      <form onSubmit={handleFormSubmit}>
        <InputText
          label="Name"
          name="name"
          value={name}
          handleChange={handleInputs}
        />
        <br />
        <br />
        <Dropdown
          label="Continent"
          options={continents}
          selected={continent}
          name="continent"
          handleChange={handleInputs}
        />
        <br />
        <br />
        <Dropdown
          label="Country"
          options={countries[continent] || []}
          selected={country}
          name="country"
          handleChange={handleInputs}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
