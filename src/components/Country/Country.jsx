import "./Country.css";

const Country = ({ country }) => {
  const { flags, name } = country;

  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h2>
        Name : <b>{name.common}</b>
      </h2>
      <h2>Official : {name.official}</h2>
    </div>
  );
};

export default Country;
