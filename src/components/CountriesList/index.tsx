import React from 'react';

interface Props {
  countries: any;
}

const CountriesList: React.FC<Props> = ({ countries = [] }) => {
  return (
    <div>
      {countries.map((country: any) => (
        <div key={country.name.common}>{country.name.common}</div>
      ))}
    </div>
  );
};

export default CountriesList;
