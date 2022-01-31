import React from 'react';
import { Link } from 'react-router-dom';

import { LinkProps } from './types';

const CustomLink = (props: LinkProps): JSX.Element => {
    const { children, to, className } = props;

    return (
        <Link className={className} to={to}>
            {children}
        </Link>
    );
};

export default CustomLink;
