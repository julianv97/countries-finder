import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { CountryType } from '../../schemas';
import { white, darkBlue } from '../../theme/colors';

interface Props {
  country: CountryType;
}

const CountryCard: React.FC<Props> = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <Box boxShadow="base" w="auto" bg={white} borderRadius="md" _dark={{ bg: darkBlue }}>
      <Image
        src={flags.png}
        alt={name?.common}
        h="40"
        w="100%"
        borderTopRadius="md"
        boxShadow="sm"
      />
      <Box p={5}>
        <Heading as="h4" size="md" mb={3}>
          {name?.common}
        </Heading>
        <Text>Population: {population}</Text>
        <Text>Region: {region} </Text>
        <Text>Capital: {capital} </Text>
      </Box>
    </Box>
  );
};

export default CountryCard;
