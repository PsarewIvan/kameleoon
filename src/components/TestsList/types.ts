import { ITest } from '../../utils/api/apiDataTypes';
import { ISiteCollection } from '../../utils/hooks/useDataLoading';

export interface TestsListProps {
    tests: ITest[];
    sites: ISiteCollection;
}
