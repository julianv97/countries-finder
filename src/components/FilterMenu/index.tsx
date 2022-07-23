import React, { useId } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { buttonDarkGray, buttonGray } from '../../theme/colors';

interface Props {
  title: string;
  items: string[];
  // eslint-disable-next-line no-unused-vars
  onClickItem: (value: string, filterBy: string) => void;
}

const FilterMenu: React.FC<Props> = ({ title, items, onClickItem }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg={buttonGray}
        _dark={{
          bg: buttonDarkGray,
        }}
        w="64"
        boxShadow="sm"
        mt={[10, 10, 0]}
      >
        {title}
      </MenuButton>
      <MenuList>
        {items.map((item) => (
          <MenuItem
            textTransform="capitalize"
            onClick={() => onClickItem(item, 'region')}
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
