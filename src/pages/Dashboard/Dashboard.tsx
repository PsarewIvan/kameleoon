import React, { useCallback, useEffect, useState } from 'react';

import SearchInput from '../../components/SearchInput/SearchInput';
import Loader from '../../components/Loader/Loader';
import Title from '../../components/Title/Title';
import SortHeading from '../../components/SortHeading/SortHeading';
import TestsList from '../../components/TestsList/TestsList';
import { sortTests } from '../../utils/sortTests';
import { ISortItem, ISortType } from '../../components/SortHeading/types';

import s from './Dashboard.module.scss';
import { DashboardProps, SortStateType } from './types';
import NotMatch from '../../components/NotMatch/NotMatch';

const INIT_SORT_STATE: SortStateType = {
    item: 'name',
    type: 'ASC',
};

const Dashboard = (props: DashboardProps) => {
    const { sites, tests } = props;
    const isTestsLoading = tests.length !== 0;
    const [searchText, setSearchText] = useState('');
    const [sort, setSort] = useState(INIT_SORT_STATE);
    const [filteredTests, setFilteredTests] = useState(tests);

    const searchInputLabel = isTestsLoading
        ? `${filteredTests.length} tests`
        : '';

    const onSortChange = useCallback(
        (sortItem: ISortItem, sortType: ISortType) => {
            setSort({ item: sortItem, type: sortType });
        },
        []
    );

    const resetSearchText = () => {
        setSearchText('');
    };

    const sortedTests = sortTests(filteredTests, sites, sort);
    const isTestsEmpty = sortedTests.length === 0;

    useEffect(() => {
        const filtered = tests.filter((test) =>
            test.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredTests(filtered);
    }, [searchText, tests]);

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
            {!isTestsEmpty && (
                <SortHeading
                    onSortChange={onSortChange}
                    sortItem={sort.item}
                    sortType={sort.type}
                />
            )}
            {isTestsLoading ? (
                isTestsEmpty ? (
                    <NotMatch onResetClick={resetSearchText} />
                ) : (
                    <TestsList tests={sortedTests} sites={sites} />
                )
            ) : (
                <Loader />
            )}
        </section>
    );
};

export default Dashboard;
