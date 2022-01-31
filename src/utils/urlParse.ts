export const urlParse = (str: string): string => {
    const url = new URL(str);

    if (url.host.slice(0, 3) === 'www') {
        return url.host.slice(4);
    }

    return url.host;
};
