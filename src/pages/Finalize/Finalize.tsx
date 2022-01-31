import React from 'react';
import { useParams } from 'react-router-dom';

import DataPageLoader from '../../components/DataPageLoader/DataPageLoader';
import Title from '../../components/Title/Title';

import { FinalizeProps } from './types';

const Finalize = (props: FinalizeProps) => {
    const { tests, isLoading } = props;
    const { id } = useParams();

    const findItem = tests.find((test) => test.id === Number(id));

    return (
        <DataPageLoader isLoading={isLoading} isPageFound={!!findItem}>
            <>
                <Title text="Finalize" subText="Spring promotion" />
                <span>{findItem?.name}</span>
            </>
        </DataPageLoader>
    );
};

export default Finalize;
