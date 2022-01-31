import { SortStateType } from '../pages/Dashboard/types';
import { ITest, TestStatus } from './api/apiDataTypes';
import { ISiteCollection } from './hooks/useDataLoading';
import { urlParse } from './urlParse';

const SORT_LIST_ASC = [
    TestStatus.ONLINE,
    TestStatus.PAUSED,
    TestStatus.STOPPED,
    TestStatus.DRAFT,
];
const SORT_LIST_DESC = [
    TestStatus.DRAFT,
    TestStatus.STOPPED,
    TestStatus.PAUSED,
    TestStatus.ONLINE,
];

export const sortTests = (
    tests: ITest[],
    sites: ISiteCollection,
    method: SortStateType
): ITest[] => {
    const testsClone = [...tests];

    const alphabeticSort = (
        a: string | number,
        b: string | number
    ): 1 | -1 | 0 => {
        if (a < b) {
            return method.type === 'ASC' ? -1 : 1;
        }
        if (a > b) {
            return method.type === 'ASC' ? 1 : -1;
        }
        return 0;
    };

    const sort =
        (value: keyof ITest) =>
        (a: ITest, b: ITest): 1 | -1 | 0 => {
            return alphabeticSort(a[value], b[value]);
        };

    if (method.item === 'name') {
        return testsClone.sort(sort('name'));
    }

    if (method.item === 'type') {
        return testsClone.sort(sort('type'));
    }

    if (method.item === 'site') {
        return testsClone.sort((a, b) => {
            const urlA = urlParse(sites[a.siteId.toString()]);
            const urlB = urlParse(sites[b.siteId.toString()]);
            return alphabeticSort(urlA, urlB);
        });
    }

    if (method.item === 'status') {
        return testsClone.sort((a, b) => {
            if (method.type === 'ASC') {
                return (
                    SORT_LIST_ASC.indexOf(a.status) -
                    SORT_LIST_ASC.indexOf(b.status)
                );
            }
            return (
                SORT_LIST_DESC.indexOf(a.status) -
                SORT_LIST_DESC.indexOf(b.status)
            );
        });
    }

    return tests;
};
