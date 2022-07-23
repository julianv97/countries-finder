import React from 'react';
import { Button as ButtonChakra } from '@chakra-ui/react';

interface Props {
  text: string;
  icon?: any;
  onClick?: () => void;
  backgroundColor?: string[];
  width?: string;
  height?: string;
  boxShadow?: string;
}

const Button: React.FC<Props> = ({
  text,
  icon,
  onClick,
  backgroundColor = ['inherit', 'inherit'],
  width = 28,
  height = 'auto',
  boxShadow = 'none',
}) => {
  return (
    <ButtonChakra
      onClick={onClick}
      leftIcon={icon}
      w={width}
      h={height}
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
