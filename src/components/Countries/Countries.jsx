import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [visitedCountries,setVisitedCountries] = useState([]);

  const handleVisit = ()=>{
    console.log("completed task")
  }

  return (
    <div>
      <h2>250 Countries</h2>
      <div style={{ border: "2px solid yellow" }}>
        <h2>Visited Countries By me</h2>
        <ul>
          <li>
            <b>japan</b>
          </li>
        </ul>
      </div>
      <div className="contries-container">
        {countries.map((country) => (
          <Country key={country.cca2} country={country} handleVisit={handleVisit}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
