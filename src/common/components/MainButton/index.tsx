import React from 'react';
import type { MainButtonPropsType } from './index.types';
import Button from '../Button';
import { buildMainButton } from './index.styles';
import { useTheme } from '@emotion/react';
import Typography from '../Typography';

export default function MainButton({
  children,
  disabled = false,
  ...rest
}: MainButtonPropsType) {
  const theme = useTheme();
  return (
    <Button {...rest} css={buildMainButton(theme, disabled)}>
      <Typography variant={'button1'}>{children}</Typography>
    </Button>
  );
}
