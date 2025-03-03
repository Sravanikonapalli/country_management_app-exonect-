import React from "react";
import CityList from "./CityList";
import "../styles/styles.css"; 

function StateList({ countryIndex, countries, setCountries }) {
  const addCity = (stateIndex) => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.push(cityName);
      setCountries(updatedCountries);
    }
  };

  const editState = (stateIndex) => {
    const newStateName = prompt("Enter new state name:");
    if (newStateName) {
      const isConfirmed = window.confirm(`Are you sure you want to rename the state to "${newStateName}"?`);
      if (isConfirmed) {
        const updatedCountries = [...countries];
        updatedCountries[countryIndex].states[stateIndex].name = newStateName;
        setCountries(updatedCountries);
      }
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.splice(stateIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="state-container">
      {countries[countryIndex].states.map((state, index) => (
        <div key={index} className="state-section">
          <h3>{state.name}</h3>
          <button className="state-edit-btn" onClick={() => editState(index)}>Edit</button>
          <button className="state-delete-btn" onClick={() => deleteState(index)}>Delete</button>
          <button className="state-add-btn" onClick={() => addCity(index)}>Add City</button>
          <CityList
            stateIndex={index}
            countryIndex={countryIndex}
            countries={countries}
            setCountries={setCountries}
          />
        </div>
      ))}
    </div>
  );
}

export default StateList;
