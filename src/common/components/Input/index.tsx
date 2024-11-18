import React, { ChangeEvent } from 'react';
import { InputPropsType } from './types';

export default function Input({
  value,
  onValueChange,
  type = 'text',
  error,
  ...rest
}: InputPropsType) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      className={`input-field ${error ? 'input-error' : ''}`}
      {...rest}
    />
  );
}