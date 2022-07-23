import React from 'react';
import { CountryType } from '../../schemas';

interface Props {
  countries: CountryType[];
}

const CountriesList: React.FC<Props> = ({ countries = [] }) => {
  return (
    <div>
      {countries.map((country: CountryType) => (
        <div key={country.name.common}>{country.name.common}</div>
      ))}
    </div>
  );
};

export default CountriesList;
