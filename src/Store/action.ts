import { FilterSet } from '../Types/FilterSet';


export type Action = { type: 'SET_TAB_SELECTED'; tabSelected: 'list' | 'new' }
  | { type: 'SET_FILTER_SET'; filterSet: FilterSet; };
