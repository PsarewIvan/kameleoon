import React, { useState } from 'react';

import SearchInput from '../../components/SearchInput/SearchInput';
import Loader from '../../components/Loader/Loader';
import Title from '../../components/Title/Title';

import s from './Dashboard.module.scss';
import { DashboardProps, SortStateType } from './types';
import SortHeading from '../../components/SortHeading/SortHeading';
import { ISortItem, ISortType } from '../../components/SortHeading/types';
import TestsList from '../../components/TestsList/TestsList';

const INIT_SORT_STATE: SortStateType = {
    item: 'name',
    type: 'ASC',
};

const Dashboard = (props: DashboardProps) => {
    const { sites, tests } = props;
    const isTestsLoading = tests.length !== 0;
    const [searchText, setSearchText] = useState('');
    const [sort, setSort] = useState(INIT_SORT_STATE);

    const searchInputLabel = isTestsLoading ? `${tests.length} tests` : '';

    const onSortChange = (sortItem: ISortItem, sortType: ISortType) => {
        setSort({ item: sortItem, type: sortType });
    };

    return (
        <section className={s.section}>
            <Title text="Dashboard" tag="h1" />
            <SearchInput
                className={s.searchInput}
                label={searchInputLabel}
                value={searchText}
                placeholder="What test are you looking for?"
                onChange={setSearchText}
            />
            <SortHeading
                onSortChange={onSortChange}
                sortItem={sort.item}
                sortType={sort.type}
            />
            {isTestsLoading ? (
                <TestsList tests={tests} sites={sites} />
            ) : (
                <Loader />
            )}
        </section>
    );
};

export default Dashboard;
