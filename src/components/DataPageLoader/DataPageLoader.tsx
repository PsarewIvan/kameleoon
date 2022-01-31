import React from 'react';
import ChevronIcon from '../../icons/ChevronIcon';

import NotFound from '../../pages/NotFound/NotFound';
import CustomLink from '../CustomLink/CustomLink';
import Loader from '../Loader/Loader';

import s from './DataPageLoader.module.scss';
import { DataPageLoaderProps } from './types';

const DataPageLoader = (props: DataPageLoaderProps) => {
    const { children, isLoading, isPageFound } = props;
    return (
        <div className={s.wrapper}>
            {!isLoading && <Loader />}
            {isLoading && isPageFound && (
                <>
                    {children}
                    <CustomLink className={s.backLink} to="/">
                        <ChevronIcon className={s.backIcon} />
                        Back
                    </CustomLink>
                </>
            )}
            {isLoading && !isPageFound && <NotFound />}
        </div>
    );
};

export default DataPageLoader;
