import React from 'react';
import clsx from 'clsx';

import s from './Input.module.scss';
import { InputProps } from './types';

const Input = (props: InputProps) => {
    const { value, onChange, placeholder, className } = props;

    const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange(evt.target.value);
    };

    return (
        <input
            className={clsx(s.input, className)}
            value={value}
            onChange={onInputChange}
            placeholder={placeholder}
        />
    );
};

export default Input;
