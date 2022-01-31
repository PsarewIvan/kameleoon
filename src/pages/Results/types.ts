import { ITest } from '../../utils/api/apiDataTypes';

export interface ResultsProps {
    tests: ITest[];
    isLoading: boolean;
}
