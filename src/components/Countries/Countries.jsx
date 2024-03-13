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
  //  for showing visited countries name
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisit = (country) => {
    console.log("completed task");
    // const { name } = country;
    // setVisitedCountries(name.common);
    const newVisited = [...visitedCountries, country];
    setVisitedCountries(newVisited);
  };

  //  for showing visited countries flag
  const [visitedFlag, setVisitedFlag] = useState([]);
  const visitedCountriesFlag = (flag) => {
    const newFlag = [...visitedFlag, flag];
    setVisitedFlag(newFlag);
  };

  return (
    <div>
      <h2>250 Countries</h2>
      <div style={{ border: "2px solid yellow" }}>
        <h2>Visited Countries By me</h2>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* visited flag */}
      <div >
        {visitedFlag.map((flag, idx) => (
          <img className="visited-flag" key={idx} src={flag} alt="" />
        ))}
      </div>
      <div className="contries-container">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleVisit={handleVisit}
            visitedCountriesFlag={visitedCountriesFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
