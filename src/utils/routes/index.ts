import Finalize from '../../pages/Finalize/Finalize';
import Results from '../../pages/Results/Results';

export enum TESTS_LINKS {
    results = 'results',
    finalize = 'finalize',
}

export const ROUTES_LIST = {
    results: `${TESTS_LINKS.results}/:id`,
    finalize: `${TESTS_LINKS.finalize}/:id`,
};

export const routes = [
    {
        path: ROUTES_LIST.results,
        Component: Results,
    },
    {
        path: ROUTES_LIST.finalize,
        Component: Finalize,
    },
];
