import { ISortType } from '../SortHeading/types';

export interface SortButtonProps {
    label: string;
    sortType: ISortType | null;
    onClick: () => void;
}
