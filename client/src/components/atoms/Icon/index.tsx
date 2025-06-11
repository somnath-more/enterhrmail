import React from 'react';
import { Box, styled } from '@mui/material';

export interface IconComponentProps {
  width?: string;
  height?: string;
  padding?: string;
  src: string;
  onclick?: (event: any) => void;
}

const StyledIcon = styled('img')((props: IconComponentProps) => ({
  height: props.height,
  width: props.width,
  padding: props.padding
}));

const IconComponent: React.FC<IconComponentProps> = ({
  src,
  width,
  height,
  padding,
  onclick,
  ...props
}) => {
  return (
    <Box onClick={onclick}>
      <StyledIcon
        data-testid="iconComponent"
        src={src}
        height={height}
        width={width}
        padding={padding}
        alt="icon"
        {...props}
      />
    </Box>
  );
};

export default IconComponent;
