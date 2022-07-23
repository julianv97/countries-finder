import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  text: string;
}

const ListItem: React.FC<Props> = ({ title, text }) => {
  return (
    <Flex my={1} alignItems="center">
      <Text fontWeight="semibold" as="h4" size="xs" mr={1}>
        {title}:
      </Text>
      <Text fontSize="sm">{text}</Text>
    </Flex>
  );
};

export default ListItem;
