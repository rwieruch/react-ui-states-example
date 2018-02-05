import React, { Component } from 'react';
import './App.css';

import Select from './Select';

const COUNTRY_OPTIONS = {
  thailand: {
    value: 'thailand',
    label: 'Thailand',
  },
  southAfrica: {
    value: 'southAfrica',
    label: 'South Africa',
  },
};

const FRUIT_OPTIONS = {
  banana: {
    value: 'banana',
    label: 'Banana',
  },
  grapefruit: {
    value: 'grapefruit',
    label: 'Grapefruit',
  },
  apple: {
    value: 'apple',
    label: 'Apple',
  },
};

// Transitions

const FRUIT_OPTIONS_BY_COUNTRY = {
  [COUNTRY_OPTIONS.thailand.value]: {
    banana: FRUIT_OPTIONS.banana,
    grapefruit: FRUIT_OPTIONS.grapefruit,
    apple: FRUIT_OPTIONS.apple,
  },
  [COUNTRY_OPTIONS.southAfrica.value]: {
    banana: FRUIT_OPTIONS.banana,
    grapefruit: FRUIT_OPTIONS.grapefruit,
  },
};

const getOptions = (options, fallbackOptions) =>
  options
    ? options
    : fallbackOptions;

const getValue = (option, fallbackOption) =>
  option
    ? option.value
    : fallbackOption.value;

const INITIAL_STATE = {
  country: COUNTRY_OPTIONS.thailand.value,
  countryOptions: COUNTRY_OPTIONS,

  fruit: FRUIT_OPTIONS.banana.value,
  fruitOptions: FRUIT_OPTIONS,
};

class App extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleCountryChange = (value) => {
    this.setState((prevState) => {
      const fruitOptions = getOptions(FRUIT_OPTIONS_BY_COUNTRY[value], FRUIT_OPTIONS);
      const fruit = getValue(fruitOptions[prevState.fruit], FRUIT_OPTIONS.grapefruit);

      return {
        country: value,

        fruit,
        fruitOptions,
      };
    });
  }

  handleFruitChange = (value) => {
    this.setState({ fruit: value });
  }

  render() {
    return (
      <div className="App">
        <Select
          options={this.state.countryOptions}
          value={this.state.country}
          handleChange={this.handleCountryChange}
        >
          Country
        </Select>

        <Select
          options={this.state.fruitOptions}
          value={this.state.fruit}
          handleChange={this.handleFruitChange}
        >
          Fruit
        </Select>

        <div>
          {JSON.stringify([
            this.state.country,
            this.state.fruit
          ])}
        </div>
      </div>
    );
  }
}

export default App;
