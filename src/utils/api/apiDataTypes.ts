export enum TestType {
    CLASSIC = 'CLASSIC',
    SERVER_SIDE = 'SERVER_SIDE',
    MVT = 'MVT',
}

export enum TestStatus {
    DRAFT = 'DRAFT',
    ONLINE = 'ONLINE',
    PAUSED = 'PAUSED',
    STOPPED = 'STOPPED',
}

export enum SitesName {
    MARKET = 'https://market.company.com',
    DELIVERY = 'https://www.delivery.company.com',
    GAMES = 'http://games.company.com',
}

export interface ISite {
    id: number;
    url: string;
}

export interface ITest {
    id: number;
    name: string;
    type: TestType;
    status: TestStatus;
    siteId: number;
}
