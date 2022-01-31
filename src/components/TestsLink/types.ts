import { TESTS_LINKS } from '../../utils/routes';

type ThemeType = 'Green' | 'Gray';

export type ItemHrefType = `${TESTS_LINKS}/${number}`;

export interface TestsLinkProps {
    label: string;
    href: ItemHrefType;
    theme?: ThemeType;
}
