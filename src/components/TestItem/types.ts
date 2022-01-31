import { TestStatus, TestType } from '../../utils/api/apiDataTypes';

export interface TestItemProps {
    id: number;
    name: string;
    type: TestType;
    status: TestStatus;
    site: string;
}
