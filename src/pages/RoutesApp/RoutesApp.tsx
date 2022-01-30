import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import { routes } from '../../utils/routes';
import Dashboard from '../Dashboard/Dashboard';
import NotFound from '../NotFound/NotFound';

const RoutesApp = (): JSX.Element => {
    const isLoadingData = false;

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {isLoadingData ? (
                    <Route index element={<Loader />} />
                ) : (
                    <Route index element={<Dashboard />} />
                )}
                {routes.map(({ path, Component }) => (
                    <Route path={path} element={<Component />} key={path} />
                ))}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default RoutesApp;
