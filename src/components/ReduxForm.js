import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mapFormData, clearCountryData } from "../redux/slices";
import Title from "./Title";
import Dropdown from "./utils/Dropdown";
import InputText from "./utils/InputText";

export default function ReduxForm({ continents, countries }) {
  const dispatch = useDispatch();
  const { continent, country, name } = useSelector(state => state.practiseRedux);

  useEffect(() => {
    dispatch(clearCountryData());
  }, [dispatch, continent]);

  const handleInputs = (e) => {
    dispatch(mapFormData({ key: e.target.name, value: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(continent, country, name);
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
