import React from 'react';
import clsx from 'clsx';

import s from './Title.module.scss';
import { TitleProps } from './types';

const Title = React.memo((props: TitleProps) => {
    const { text, tag, className, subText } = props;
    const CustomTag = tag || 'h2';

    return (
        <CustomTag className={clsx(s.title, className)}>
            {text}
            {subText && <span className={s.subText}>{subText}</span>}
        </CustomTag>
    );
});

export default Title;
