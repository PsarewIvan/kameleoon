import Finalize from '../../pages/Finalize/Finalize';
import Results from '../../pages/Results/Results';

export enum ROUTES_LIST {
    results = '/results',
    finalize = '/finalize',
}

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
