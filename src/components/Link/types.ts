import { ReactNode } from 'react';

import { ROUTES_LIST } from '../../utils/routes';

export interface LinkProps {
    to: ROUTES_LIST | '/';
    children: ReactNode;
}
