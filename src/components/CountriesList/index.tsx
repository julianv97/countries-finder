import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import CountryCard from '../CountryCard';
import { CountryType } from '../../schemas';

interface Props {
  countries: CountryType[];
}

const CountriesList: React.FC<Props> = ({ countries = [] }) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" columnGap="36" rowGap="16" mt={10}>
      {countries.map((country: CountryType) => (
        <GridItem key={country.name.common}>
          <CountryCard country={country} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default CountriesList;
