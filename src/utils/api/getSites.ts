import { API_LINKS, fetchJson } from './api';
import { ISite } from './apiDataTypes';

export async function getSites(id?: string): Promise<ISite[]> {
    const data = await fetchJson(API_LINKS.sites, id);

    if (id) return [data];

    return data.map((site: ISite) => ({
        id: site.id,
        url: site.url,
    }));
}
