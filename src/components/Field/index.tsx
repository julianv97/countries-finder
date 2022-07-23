import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { white } from '../../theme/colors';

interface Props {
  placeholder: string;
  width?: string | number;
  icon?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: any) => void;
}

const Field: React.FC<Props> = ({ placeholder, width, icon, onChange }) => {
  return (
    <InputGroup>
      {icon && (
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.500" />
        </InputLeftElement>
      )}
      <Input
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder={placeholder}
        _placeholder={{ color: 'gray.500' }}
        _dark={{
          _placeholder: {
            color: white,
          },
        }}
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
