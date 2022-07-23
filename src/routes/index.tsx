import React from 'react';
import { Route } from 'wouter';
import Layout from '../components/Layout';
import CountryDetail from '../screens/CountryDetail';
import Home from '../screens/Home';

const Router = () => {
  return (
    <Layout>
      <Route path="/" component={Home} />
      <Route path="/details/:code" component={CountryDetail} />
    </Layout>
  );
};

export default Router;
