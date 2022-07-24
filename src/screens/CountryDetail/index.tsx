import React from 'react';
import { Box, Flex, Image, Heading, Grid, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';
import { getCountry } from '../../api';
import Button from '../../components/Button';
import { darkBlue, white } from '../../theme/colors';
import ListItem from '../../components/ListItem';

const CountryDetail = () => {
  const { alpha3Code } = useParams();
  const navigate = useNavigate();
  const {
    data: country,
    isFetching,
    isError,
  } = useQuery(['country'], () => getCountry({ alpha3Code } as { alpha3Code: string }));

  if (isError) return <div>Error!</div>;

  if (isFetching) return <Spinner size="xl" mt={20} />;

  console.log(country);

  const LIST_ITEMS = [
    { title: 'Native Name', text: country?.name },
    { title: 'Capital', text: country?.capital || 'N/A' },
    { title: 'Population', text: country?.population.toLocaleString() },
    { title: 'Top Level Domain', text: country?.topLevelDomain },
    { title: 'Region', text: country?.region },
    {
      title: 'Currencies',
      text: country?.currencies
        ? country?.currencies.map((currency) => currency.name).join(', ')
        : 'N/A',
    },
    { title: 'Sub Region', text: country?.subregion },
    {
      title: 'Languages',
      text: country?.languages.map((language) => language.name).join(', '),
    },
  ];

  return (
    <Flex direction="column" w="100%" mx={10} my={10}>
      <Box mb={10}>
        <Button
          text="Back"
          width="32"
          height="10"
          icon={<ArrowBackIcon />}
          backgroundColor={[white, darkBlue]}
          boxShadow="sm"
          onClick={() => {
            navigate('/');
          }}
        />
      </Box>
      <Flex flexDirection={['column', 'column', 'row']}>
        <Image
          src={country?.flags.png}
          w={['100%', '100%', '50%']}
          h="96"
          mr={20}
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Box w="100%">
          <Heading my={10}>{country?.name}</Heading>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
            ]}
            gap={4}
          >
            {LIST_ITEMS.map((item) => (
              <ListItem key={item.title} title={item.title} text={item.text as string} />
            ))}
          </Grid>
          <Flex alignItems="center" mt={10}>
            <Heading size="sm" mr={4}>
              Border Countries:
            </Heading>
            <Flex flexWrap="wrap" gap={2}>
              {country?.borders?.map((border) => (
                <Button
                  key={border}
                  text={border}
                  width="14"
                  height="8"
                  backgroundColor={[white, darkBlue]}
                  boxShadow="sm"
                  onClick={() => {
                    navigate(`/details/${border}`);
                    window.location.reload();
                  }}
                />
              ))}
              {!country?.borders && <p>No borders</p>}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CountryDetail;
