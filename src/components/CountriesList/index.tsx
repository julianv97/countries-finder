import React from 'react';
import { Flex } from '@chakra-ui/react';
import CountryCard from '../CountryCard';
import { CountryType } from '../../schemas';

interface Props {
  countries: CountryType[];
}

const CountriesList: React.FC<Props> = ({ countries = [] }) => {
  return (
    <Flex
      justifyContent={['center', 'center', 'space-between']}
      flexWrap="wrap"
      w="100%"
      columnGap={5}
      rowGap={10}
      mt="10"
    >
      {countries.map((country: CountryType) => (
        <CountryCard country={country} />
      ))}
    </Flex>
  );
};

export default CountriesList;
