import React from 'react';
import clsx from 'clsx';

import SearchIcon from '../../icons/SearchIcon';
import Input from '../Input/Input';

import s from './SearchInput.module.scss';
import { SearchInputProps } from './types';

const SearchInput = (props: SearchInputProps) => {
    const { label, className, ...otherProps } = props;

    return (
        <div className={clsx(s.wrapper, className)}>
            <Input {...otherProps} />
            <span className={s.label}>{label}</span>
            <SearchIcon className={s.icon} />
        </div>
    );
};

export default SearchInput;
