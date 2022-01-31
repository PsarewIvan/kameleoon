import React, { useState } from 'react';

import SearchInput from '../../components/SearchInput/SearchInput';
import Loader from '../../components/Loader/Loader';
import Title from '../../components/Title/Title';
import SortHeading from '../../components/SortHeading/SortHeading';
import TestsList from '../../components/TestsList/TestsList';
import NotMatch from '../../components/NotMatch/NotMatch';
import { sortTests } from '../../utils/sortTests';
import { useTestsFilter } from '../../utils/hooks/useTestsFilter';
import { useTestsSort } from '../../utils/hooks/useTestsSort';

import s from './Dashboard.module.scss';
import { DashboardProps } from './types';

const Dashboard = (props: DashboardProps) => {
    const { sites, tests } = props;
    const [searchText, setSearchText] = useState('');
    const [sort, onSortChange] = useTestsSort();
    const filteredTests = useTestsFilter(tests, searchText);

    const resetSearchText = () => {
        setSearchText('');
    };

    const isTestsLoading = tests.length !== 0;
    const searchInputLabel = isTestsLoading
        ? `${filteredTests.length} tests`
        : '';
    const sortedTests = sortTests(filteredTests, sites, sort);
    const isTestsEmpty = sortedTests.length === 0;

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
