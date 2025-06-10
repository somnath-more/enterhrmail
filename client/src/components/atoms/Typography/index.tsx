// src/components/atoms/Typography.tsx
import React from 'react';
import { Typography as MuiTypography, type TypographyProps } from '@mui/material';

interface CustomTypographyProps extends TypographyProps {
  text: string;
}

const Typography: React.FC<CustomTypographyProps> = ({ text, ...rest }) => {
  return <MuiTypography {...rest}>{text}</MuiTypography>;
};

export default Typography;
