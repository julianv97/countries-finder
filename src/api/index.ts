import axios from 'axios';
import { CountryType } from '../schemas';

export const getCountries = async (): Promise<CountryType[]> => {
  const response = await axios.get('https://restcountries.com/v2/all');
  return response.data;
};

export const getCountry = async ({ alpha3Code }: { alpha3Code: string }): Promise<CountryType> => {
  const response = await axios.get(`https://restcountries.com/v2/alpha/${alpha3Code}`);
  return response.data;
};
