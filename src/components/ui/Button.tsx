'use client';

import React, { forwardRef } from 'react';
import {
  SpecularButton,
  SpecularButtonProps,
  SpecularButtonSize,
  SpecularButtonVariant,
} from './SpecularButton';

export type ButtonProps = SpecularButtonProps;
export type { SpecularButtonSize, SpecularButtonVariant };

export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  return <SpecularButton ref={ref} {...props} />;
});

Button.displayName = 'Button';

export { SpecularButton };
export default Button;
