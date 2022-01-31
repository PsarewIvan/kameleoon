import React from 'react';
import clsx from 'clsx';

import TestsLink from '../TestsLink/TestsLink';
import { TestStatus } from '../../utils/api/apiDataTypes';
import { urlParse } from '../../utils/urlParse';
import { typeParse } from '../../utils/typeParse';
import { statusParse } from '../../utils/statusParse';
import { hrefParse } from '../../utils/hrefParse';
import { getUrlClass } from '../../utils/getUrlClass';

import s from './TestItem.module.scss';
import { TestItemProps } from './types';

const TestItem = (props: TestItemProps) => {
    const { id, name, status, site, type } = props;
    const buttonLabel = status === TestStatus.DRAFT ? 'Finalize' : 'Results';
    const classNamePrefix = getUrlClass(site);
    const linkTheme = buttonLabel === 'Results' ? 'Green' : 'Gray';

    return (
        <li className={clsx(s.wrapper, s[`wrapper${classNamePrefix}`])}>
            <span className={s.name}>{name}</span>
            <span className={s.type}>{typeParse(type)}</span>
            <span className={clsx(s.status, s[`status${status}`])}>
                {statusParse(status)}
            </span>
            <span className={s.site}>{urlParse(site)}</span>
            <TestsLink
                label={buttonLabel}
                href={hrefParse(status, id)}
                theme={linkTheme}
            />
        </li>
    );
};

export default TestItem;
