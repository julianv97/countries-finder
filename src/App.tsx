import React from 'react';
import { Flex } from '@chakra-ui/react';
import Layout from './components/Layout';
import Field from './components/Field';
import FilterMenu from './components/FilterMenu';
import REGIONS from './constants';

const App = () => {
  return (
    <Layout>
      <Flex alignItems="center" justifyContent="space-between" width="90%">
        <Field placeholder="Search for a country..." icon />
        <FilterMenu title="Filter by Region" items={REGIONS} />
      </Flex>
    </Layout>
  );
};

export default App;
