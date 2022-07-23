import React from 'react';
import { Box, Flex, HStack, Image, Heading } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useLocation } from 'wouter';
import { getCountry } from '../../api';
import Button from '../../components/Button';
import { DetailsParamsType } from '../../schemas';
import { darkBlue, white } from '../../theme/colors';
import ListItem from '../../components/ListItem';

const CountryDetail = ({ params }: DetailsParamsType) => {
  const {
    data: country,
    isFetching,
    isError,
  } = useQuery(['country'], () => getCountry({ alpha3Code: params.alpha3Code }));
  const location = useLocation();

  if (isError) return <div>Error!</div>;

  if (isFetching) return <div>Loading...</div>;

  return (
    <Flex direction="column" w="100%" mt={10}>
      <Box mb={10}>
        <Button
          text="Back"
          width="32"
          icon={<ArrowBackIcon />}
          backgroundColor={[white, darkBlue]}
          boxShadow="sm"
          onClick={() => location[1]('/')}
        />
      </Box>
      <HStack>
        <Image src={country?.flags.png} w="2xl" />
        <Box>
          <Heading>{country?.name}</Heading>
          {[
            { title: 'Native Name', text: country?.population.toLocaleString() },
            { title: 'Population', text: country?.population.toLocaleString() },
            { title: 'Region', text: country?.region },
            { title: 'Sub Region', text: country?.subregion },
            { title: 'Capital', text: country?.capital },
            { title: 'Top Level Domain', text: country?.topLevelDomain },
            {
              title: 'Currencies',
              text: country?.currencies.map((currency) => currency.name).join(', '),
            },
            {
              title: 'Languages',
              text: country?.languages.map((language) => language.name).join(', '),
            },
          ].map((item) => (
            <ListItem key={item.title} title={item.title} text={item.text as string} />
          ))}

          <Flex alignItems="center" mt={10}>
            <Heading size="md" mr={4}>
              Border Countries:
            </Heading>
            <Box>
              {country?.borders?.map((border) => (
                <Button
                  key={border}
                  text={border}
                  width="32"
                  backgroundColor={[white, darkBlue]}
                  boxShadow="sm"
                  onClick={() => {
                    location[1](`/details/${border}`);
                    window.location.reload();
                  }}
                />
              ))}
              {!country?.borders && <p>No borders</p>}
            </Box>
          </Flex>
        </Box>
      </HStack>
    </Flex>
  );
};

export default CountryDetail;
