import { TestType } from './api/apiDataTypes';

const TYPE_PARSE = {
    [TestType.CLASSIC]: 'Classic',
    [TestType.MVT]: 'MVT',
    [TestType.SERVER_SIDE]: 'Server-side',
};

export const typeParse = (type: TestType) => {
    return TYPE_PARSE[type];
};
