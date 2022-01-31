export type ISortItem = 'name' | 'type' | 'status' | 'site';
export type ISortType = 'ASC' | 'DESC';

export interface SortHeadingProps {
    onSortChange: (sortItem: ISortItem, sortType: ISortType) => void;
    sortItem: ISortItem;
    sortType: ISortType;
}
