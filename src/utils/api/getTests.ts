import { API_LINKS, fetchJson } from './api';
import { ITest } from './apiDataTypes';

export async function getTests(id?: string): Promise<ITest[]> {
    const data = await fetchJson(API_LINKS.tests, id);

    if (id) return [data];

    return data.map((site: ITest) => ({
        id: site.id,
        name: site.name,
        type: site.type,
        status: site.status,
        siteId: site.siteId,
    }));
}
