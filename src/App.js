import React, { useState } from "react";
import CountryList from "./components/CountryList";
import "./App.css"; 

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "India", states: [
      { id: 10, name: "Andhra Pradesh", cities: ["Vijayawada", "Visakhapatnam"] },
      { id: 11, name: "Karnataka", cities: ["Bangalore", "Mysore"] },
      { id: 12, name: "Maharashtra", cities: ["Mumbai", "Pune"] },
    ]},
    { id: 2, name: "USA", states: [
      { id: 21, name: "California", cities: ["Los Angeles", "San Francisco"] },
      { id: 22, name: "Texas", cities: ["Houston", "Dallas"] }
    ]}
  ]);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { id: Date.now(), name: countryName, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const newName = window.prompt("Enter new country name:");
    if (newName) {
      const isConfirmed = window.confirm(`Are you sure you want to rename the country to "${newName}"?`);
      if (isConfirmed) {
        const updatedCountries = [...countries];
        updatedCountries[index].name = newName;
        setCountries(updatedCountries);
      }
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="app-container">
    <div className="container">
      <h1 className="app-heading">Country, State & City Management</h1>
      <button className="add-button" onClick={addCountry}>Add Country</button>
      </div>
      <CountryList
        countries={countries}
        editCountry={editCountry}
        deleteCountry={deleteCountry}
        setCountries={setCountries}
      />
    </div>
  );
}

export default App;
