import { TestStatus } from './api/apiDataTypes';

const STATUS_PARSE = {
    [TestStatus.DRAFT]: 'Draft',
    [TestStatus.ONLINE]: 'Online',
    [TestStatus.PAUSED]: 'Paused',
    [TestStatus.STOPPED]: 'Stopped',
};

export const statusParse = (status: TestStatus): string => {
    return STATUS_PARSE[status];
};
