import React from "react";
import StateList from "./StateList";
import "../styles/styles.css";

function CountryList({ countries, editCountry, deleteCountry, setCountries }) {
  const addState = (countryIndex) => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.push({ name: stateName, cities: [] });
      setCountries(updatedCountries);
    }
  };

  return (
    <div>
      {countries.map((country, index) => (
        <div key={index} className="country-container">
          <h2>{country.name}</h2>
          <button className="country-edit-btn" onClick={() => editCountry(index)}>Edit</button>
          <button className="country-delete-btn" onClick={() => deleteCountry(index)}>Delete</button>
          <button className="country-add-btn" onClick={() => addState(index)}>Add State</button>
          <StateList countryIndex={index} countries={countries} setCountries={setCountries} />
        </div>
      ))}
    </div>
  );
}

export default CountryList;
