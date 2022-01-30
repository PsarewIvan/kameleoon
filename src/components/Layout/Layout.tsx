import React from 'react';
import { Outlet } from 'react-router-dom';

import s from './Layout.module.scss';

const Layout = (): JSX.Element => {
    return (
        <main className={s.main}>
            <Outlet />
        </main>
    );
};

export default Layout;
