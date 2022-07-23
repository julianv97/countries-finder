/* eslint-disable dot-notation */
import React, { useId } from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem';
import { CountryType } from '../../schemas';
import { white, darkBlue } from '../../theme/colors';

interface Props {
  country: CountryType;
}

const CountryCard: React.FC<Props> = ({ country }) => {
  const { flags, name, population, region, capital, alpha3Code } = country;
  return (
    <Link to={`/details/${alpha3Code}`}>
      <Box
        w={['96', '96', '72']}
        boxShadow="base"
        bg={white}
        borderRadius="md"
        _dark={{ bg: darkBlue }}
        cursor="pointer"
      >
        <Image
          src={flags.png}
          alt={name}
          h="40"
          w="100%"
          borderTopRadius="md"
          boxShadow="sm"
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Box p={5}>
          <Heading as="h4" size="md" mb={3}>
            {name}
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
