export const API_URL = 'http://localhost:3100';

export const API_LINKS = {
    sites: `${API_URL}/sites`,
    tests: `${API_URL}/tests`,
};

export class ApiError extends Error {
    constructor(url: string, public status: number) {
        super(`'${url}' returned ${status}`);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError);
        }
        this.name = 'ApiError';
    }
}

export async function fetchJson(url: string, query = ''): Promise<any> {
    const response = await fetch(`${url}/${query}`);

    if (!response.ok) {
        throw new ApiError(url, response.status);
    }

    const data = await response.json();

    return data;
}
