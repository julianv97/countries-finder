import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Field from '../../components/Field';
import FilterMenu from '../../components/FilterMenu';
import REGIONS from '../../constants';
import { getCountries } from '../../api';
import CountriesList from '../../components/CountriesList';
import useFilter from '../../hooks/useFilter';
import { CountryType } from '../../schemas';

const Home = () => {
  const { data: countries, isLoading, isError } = useQuery(['countries'], getCountries);
  const { handleFilter, filteredItems } = useFilter(countries as CountryType[]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  return (
    <Flex flexDirection="column" justifyContent="space-between" width="90%">
      <Flex w="100%" mt={10}>
        <Field placeholder="Search for a country..." icon onChange={handleFilter} />
        <FilterMenu title="Filter by Region" items={REGIONS} onClickItem={handleFilter} />
      </Flex>
      <CountriesList countries={filteredItems} />
    </Flex>
  );
};

export default Home;
