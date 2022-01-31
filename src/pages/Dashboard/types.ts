import { ISortItem, ISortType } from '../../components/SortHeading/types';
import { ITest } from '../../utils/api/apiDataTypes';
import { ISiteCollection } from '../../utils/hooks/useDataLoading';

export interface DashboardProps {
    sites: ISiteCollection;
    tests: ITest[];
}

export type SortStateType = {
    item: ISortItem;
    type: ISortType;
};
