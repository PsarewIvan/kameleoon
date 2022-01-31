import { useEffect, useState } from 'react';

import { ITest } from '../api/apiDataTypes';
import { getSites } from '../api/getSites';
import { getTests } from '../api/getTests';

export type ISiteCollection = { [key: string]: string };

export const useDataLoading = (): [boolean, ITest[], ISiteCollection] => {
    const [isLoading, setLoading] = useState(false);
    const [tests, setTests] = useState<ITest[]>([]);
    const [sites, setSites] = useState<ISiteCollection>({});

    useEffect(() => {
        (async () => {
            const tests = await getTests();
            const sites = await getSites();

            setTests(tests);
            const sitesCollection: { [key: string]: string } = {};
            sites.forEach((site) => {
                sitesCollection[site.id.toString()] = site.url;
            });
            setSites(sitesCollection);
            setLoading(true);
        })();
    }, []);

    return [isLoading, tests, sites];
};
