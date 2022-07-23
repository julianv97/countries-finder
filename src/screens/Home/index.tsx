import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Field from '../../components/Field';
import FilterMenu from '../../components/FilterMenu';
import REGIONS from '../../constants';
import { getCountries } from '../../api';
import CountriesList from '../../components/CountriesList';

const Home = () => {
  const { data: countries, isLoading, isError } = useQuery(['countries'], getCountries);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  return (
    <Flex flexDirection="column" justifyContent="space-between" width="90%">
      <Flex w="100%" mt={10}>
        <Field placeholder="Search for a country..." icon />
        <FilterMenu title="Filter by Region" items={REGIONS} />
      </Flex>
      <CountriesList countries={countries} />
    </Flex>
  );
};

export default Home;
