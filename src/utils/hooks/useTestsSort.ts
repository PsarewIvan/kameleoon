import { useCallback, useState } from 'react';

import { ISortItem, ISortType } from '../../components/SortHeading/types';
import { SortStateType } from '../../pages/Dashboard/types';

type IUseTestsSort = [
    sort: SortStateType,
    onSortChange: (sortItem: ISortItem, sortType: ISortType) => void
];

const INIT_SORT_STATE: SortStateType = {
    item: 'name',
    type: 'ASC',
};

export const useTestsSort = (): IUseTestsSort => {
    const [sort, setSort] = useState(INIT_SORT_STATE);

    const onSortChange = useCallback(
        (sortItem: ISortItem, sortType: ISortType) => {
            setSort({ item: sortItem, type: sortType });
        },
        []
    );

    return [sort, onSortChange];
};
