import React from 'react';
import { Button as ButtonChakra } from '@chakra-ui/react';

interface Props {
  text: string;
  icon?: any;
  onClick?: () => void;
  backgroundColor?: string[];
  width?: string;
  boxShadow?: string;
}

const Button: React.FC<Props> = ({
  text,
  icon,
  onClick,
  backgroundColor = ['inherit', 'inherit'],
  width = 28,
  boxShadow = 'sm',
}) => {
  return (
    <ButtonChakra
      onClick={onClick}
      leftIcon={icon}
      w={width}
      bg={backgroundColor[0]}
      boxShadow={boxShadow}
      _dark={{
        bg: backgroundColor[1],
      }}
    >
      {text}
    </ButtonChakra>
  );
};

export default Button;
