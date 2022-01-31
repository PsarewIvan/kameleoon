import React from 'react';

import s from './NotMatch.module.scss';
import { NotMatchProps } from './types';

const NotMatch = (props: NotMatchProps) => {
    const { onResetClick } = props;

    return (
        <div className={s.wrapper}>
            <span className={s.title}>
                Your search did not match any results.
            </span>
            <button className={s.button} type="button" onClick={onResetClick}>
                Reset
            </button>
        </div>
    );
};

export default NotMatch;
