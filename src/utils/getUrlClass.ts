import { SitesName } from './api/apiDataTypes';

export const getUrlClass = (url: string): string => {
    if (url === SitesName.DELIVERY) {
        return 'Delivery';
    }
    if (url === SitesName.GAMES) {
        return 'Games';
    }
    if (url === SitesName.MARKET) {
        return 'Market';
    }

    return '';
};
