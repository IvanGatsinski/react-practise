import "./App.css";
import React from "react";
import Section from "./components/utils/Section";
import ClassForm from "./components/ClassForm";
import ReduxForm from "./components/ReduxForm";
import HooksForm from "./components/HooksForm";
const continents = ["Europe", "Asia", "Africa"];

const countries = {
  Europe: ["Bulgaria", "Romania", "United Kingdom", "Spain"],
  Asia: ["Kazakhstan", "India", "South Korea", "Japan"],
  Africa: ["Ghana", "Morocco", "Egypt", "Botswana"],
};

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Section title="Using Classes">
          <ClassForm continents={continents} countries={countries} />
        </Section>
        <Section title="Using Redux">
          <ReduxForm continents={continents} countries={countries} />
        </Section>
        <Section title="Using Hooks">
          <HooksForm continents={continents} countries={countries} />
        </Section>
      </main>
    );
  }
}
