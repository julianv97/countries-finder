import { Box } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useLocation } from 'wouter';
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
  const location = useLocation();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  return (
    <Box>
      <Button
        text="Back"
        width="32"
        icon={<ArrowBackIcon />}
        backgroundColor={[white, darkBlue]}
        boxShadow="sm"
        onClick={() => location[1]('/')}
      />
    </Box>
  );
};

export default CountryDetail;
