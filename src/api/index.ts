import axios from 'axios';
import { CountryType } from '../schemas';

export const getCountries = async (): Promise<CountryType[]> => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data;
};

export const getCountry = async (name: string) => {
  const response = await axios.get(`https://restcountries.com/v3.1/alpha/${name}`);
  return response.data;
};
