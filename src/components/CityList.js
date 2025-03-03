import React from "react";
import "../styles/styles.css"; 

function CityList({ countryIndex, stateIndex, countries, setCountries }) {
  const deleteCity = (cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.splice(cityIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="city-container">
      {countries[countryIndex].states[stateIndex].cities.map((city, index) => (
        <div key={index} className="city-item">
          <p>{city}</p>
          <button className="city-delete-btn" onClick={() => deleteCity(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CityList;
