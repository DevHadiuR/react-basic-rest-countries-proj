import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisit, visitedCountriesFlag }) => {
  const { flags, name, population, area, timezones, cca3 } = country;
  const [visite, setVisit] = useState(false);
  const handleClick = () => {
    setVisit(!visite);
  };

  return (
    <div className={`country  ${visite ? "visited" : "nothing"}`}>
      <img src={flags.png} alt="" />
      <h2>
        Name : <b>{name.common}</b>
      </h2>
      <h2>Official : {name.official}</h2>
      <p>Population : {population}</p>
      <p>Area : {area} </p>
      <p>Timezones : {timezones} </p>
      <p>Code : {cca3}</p>
      {visite ? <b>I have visited </b> : <b>I never visit this place</b>}
      <br />
      <button onClick={handleClick}>{visite ? "Visited" : "Going"}</button>
      <button onClick={() => handleVisit(country)}>Gesiga</button>
      <button
        onClick={() => {
          visitedCountriesFlag(country.flags.png);
        }}
      >
        visited flag
      </button>
    </div>
  );
};

export default Country;
