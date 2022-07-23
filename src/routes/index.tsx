import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import CountryDetail from '../screens/CountryDetail';
import Home from '../screens/Home';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:alpha3Code" element={<CountryDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default Router;
