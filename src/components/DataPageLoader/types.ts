import { ReactNode } from 'react';

export interface DataPageLoaderProps {
    isLoading: boolean;
    isPageFound: boolean;
    children: ReactNode;
}
