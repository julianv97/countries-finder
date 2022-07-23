import axios from 'axios';
import { CountryType } from '../schemas';

export const getCountries = async (): Promise<CountryType[]> => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data;
};

export const getCountry = async ({ ccn3 }: { ccn3: string }): Promise<CountryType> => {
  const response = await axios.get(`https://restcountries.com/v3.1/alpha/${ccn3}`);
  return response.data[0];
};
