import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface Props {
  placeholder: string;
  width?: string | number;
  icon?: boolean;
}

const Field: React.FC<Props> = ({ placeholder, width, icon }) => {
  return (
    <InputGroup>
      {icon && (
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.500" />
        </InputLeftElement>
      )}

      <Input
        onChange={(e) => console.log(e.target.value)}
        type="text"
        placeholder={placeholder}
        w={width}
        boxShadow="sm"
      />
    </InputGroup>
  );
};

export default Field;

Field.defaultProps = {
  width: 500,
};
