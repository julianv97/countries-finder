/* eslint-disable dot-notation */
import React, { useId } from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import { Link } from 'wouter';
import ListItem from '../ListItem';
import { CountryType } from '../../schemas';
import { white, darkBlue } from '../../theme/colors';

interface Props {
  country: CountryType;
}

const CountryCard: React.FC<Props> = ({ country }) => {
  const { flags, name, population, region, capital, ccn3 } = country;
  return (
    <Link to={`/details/${ccn3}`}>
      <Box
        w={['80', '80', '72']}
        boxShadow="base"
        bg={white}
        borderRadius="md"
        _dark={{ bg: darkBlue }}
        cursor="pointer"
      >
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
          {[
            { title: 'Population', text: population.toLocaleString() },
            { title: 'Region', text: region },
            { title: 'Capital', text: capital },
          ].map((item) => (
            <ListItem key={useId()} title={item.title} text={item.text} />
          ))}
        </Box>
      </Box>
    </Link>
  );
};

export default CountryCard;
