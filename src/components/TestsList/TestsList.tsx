import React from 'react';
import NotMatch from '../NotMatch/NotMatch';

import TestItem from '../TestItem/TestItem';

import s from './TestsList.module.scss';
import { TestsListProps } from './types';

const TestsList = (props: TestsListProps) => {
    const { tests, sites } = props;

    return (
        <ul className={s.list}>
            {tests.map((test) => (
                <TestItem
                    id={test.id}
                    name={test.name}
                    status={test.status}
                    site={sites[test.siteId.toString()]}
                    type={test.type}
                    key={test.id}
                />
            ))}
        </ul>
    );
};

export default TestsList;
