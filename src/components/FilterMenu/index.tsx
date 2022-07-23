import React, { useId } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface Props {
  title: string;
  items: string[];
}

const FilterMenu: React.FC<Props> = ({ title, items }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="64" boxShadow="sm">
        {title}
      </MenuButton>
      <MenuList>
        {items.map((item) => (
          <MenuItem
            textTransform="capitalize"
            onClick={() => console.log('filter countries of:', item)}
            key={useId()}
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterMenu;
