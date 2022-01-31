import React from 'react';
import clsx from 'clsx';

import ChevronIcon from '../../icons/ChevronIcon';

import s from './SortButton.module.scss';
import { SortButtonProps } from './types';

const SortButton = (props: SortButtonProps) => {
    const { label, onClick, sortType } = props;

    return (
        <button className={s.button} type="button" onClick={onClick}>
            {label}
            <ChevronIcon
                className={clsx(s.icon, sortType && s[`icon${sortType}`])}
            />
        </button>
    );
};

export default SortButton;
