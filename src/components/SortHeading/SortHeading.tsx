import React from 'react';

import SortButton from '../SortButton/SortButton';

import s from './SortHeading.module.scss';
import { ISortItem, ISortType, SortHeadingProps } from './types';

const SortHeading = React.memo((props: SortHeadingProps) => {
    const { onSortChange, sortItem, sortType } = props;

    const onSortClick =
        (clickSortItem: ISortItem, clickSortType: ISortType) => () => {
            let currentSortType: ISortType = 'ASC';
            if (sortItem === clickSortItem) {
                currentSortType = clickSortType === 'ASC' ? 'DESC' : 'ASC';
            }
            onSortChange(clickSortItem, currentSortType);
        };

    const currentType = (item: ISortItem) => {
        return sortItem === item ? sortType : null;
    };

    return (
        <div className={s.wrapper}>
            <SortButton
                label="Name"
                onClick={onSortClick('name', sortType)}
                sortType={currentType('name')}
            />
            <SortButton
                label="Type"
                onClick={onSortClick('type', sortType)}
                sortType={currentType('type')}
            />
            <SortButton
                label="Status"
                onClick={onSortClick('status', sortType)}
                sortType={currentType('status')}
            />
            <SortButton
                label="Site"
                onClick={onSortClick('site', sortType)}
                sortType={currentType('site')}
            />
        </div>
    );
});

export default SortHeading;
