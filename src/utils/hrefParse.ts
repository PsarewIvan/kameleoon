import { ItemHrefType } from '../components/TestsLink/types';
import { TestStatus } from './api/apiDataTypes';
import { TESTS_LINKS } from './routes';

export const hrefParse = (status: TestStatus, id: number): ItemHrefType => {
    const pageHref =
        status === TestStatus.DRAFT
            ? TESTS_LINKS.finalize
            : TESTS_LINKS.results;

    return `${pageHref}/${id}`;
};
