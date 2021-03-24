import { FormControl, Select, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // STATE = how to declare a variable in React
  const [countries, setCountries] = useState([])

  // USEEFFECT = Runs a piece of code based on a given condition

  useEffect(() => {
    // The code inside here will run once when the component loads and not again
    // its async --> send a request, wait for it, do something with it
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country, // United States, United Kingdom, etc.
            value: country.countryInfo.iso2 // UK, USA, FR, etc.
          }
        ))
      })
    }
  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* Loop through all the countries and show
             a dropdown list of the options */}

            {countries.map((country) => (
                <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
