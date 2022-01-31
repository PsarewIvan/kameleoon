import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import { TestStatus } from '../../utils/api/apiDataTypes';
import { useDataLoading } from '../../utils/hooks/useDataLoading';
import { ROUTES_LIST } from '../../utils/routes';
import Dashboard from '../Dashboard/Dashboard';
import Finalize from '../Finalize/Finalize';
import NotFound from '../NotFound/NotFound';
import Results from '../Results/Results';

const RoutesApp = (): JSX.Element => {
    const [isLoading, tests, sites] = useDataLoading();

    const finalizeTests = tests.filter(
        (test) => test.status === TestStatus.DRAFT
    );

    const resultsTests = tests.filter(
        (test) => test.status !== TestStatus.DRAFT
    );

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {isLoading ? (
                    <Route
                        index
                        element={<Dashboard sites={sites} tests={tests} />}
                    />
                ) : (
                    <Route index element={<Loader />} />
                )}
                <Route
                    path={ROUTES_LIST.results}
                    element={
                        <Results tests={resultsTests} isLoading={isLoading} />
                    }
                />
                <Route
                    path={ROUTES_LIST.finalize}
                    element={
                        <Finalize tests={finalizeTests} isLoading={isLoading} />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default RoutesApp;
