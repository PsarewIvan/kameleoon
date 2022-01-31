import React from 'react';
import { useParams } from 'react-router-dom';

import DataPageLoader from '../../components/DataPageLoader/DataPageLoader';
import Title from '../../components/Title/Title';

import { ResultsProps } from './types';

const Results = (props: ResultsProps) => {
    const { tests, isLoading } = props;
    const { id } = useParams();

    const findItem = tests.find((test) => test.id === Number(id));

    return (
        <DataPageLoader isLoading={isLoading} isPageFound={!!findItem}>
            <>
                <Title text="Results" subText="Order basket redesign" />
                <span>{findItem?.name}</span>
            </>
        </DataPageLoader>
    );
};

export default Results;
