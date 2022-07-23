import { Box } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { getCountry } from '../../api';
import Button from '../../components/Button';
import { DetailsParamsType } from '../../schemas';
import { darkBlue, white } from '../../theme/colors';

const CountryDetail = ({ params }: DetailsParamsType) => {
  const {
    data: country,
    isLoading,
    isError,
  } = useQuery(['country'], () => getCountry({ ccn3: params.code }));

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  console.log(country);

  return (
    <Box>
      <Button text="Back" width="32" icon={<ArrowBackIcon />} backgroundColor={[white, darkBlue]} />
    </Box>
  );
};

export default CountryDetail;
