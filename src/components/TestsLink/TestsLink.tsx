import React from 'react';
import clsx from 'clsx';

import CustomLink from '../CustomLink/CustomLink';

import s from './TestsLink.module.scss';
import { TestsLinkProps } from './types';

const TestsLink = (props: TestsLinkProps) => {
    const { label, theme = 'Green', href } = props;

    return (
        <CustomLink className={clsx(s.link, s[`link${theme}`])} to={href}>
            {label}
        </CustomLink>
    );
};

export default TestsLink;
