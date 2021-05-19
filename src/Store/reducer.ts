import { Action } from './action';
import { FilterSet } from '../Types/FilterSet';


interface State {
  tabSelected: 'list' | 'new',
  filterSet: FilterSet;
}

export const defaultState: State = {
  tabSelected: 'list',
  filterSet: { base: [] },
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const Reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case 'SET_TAB_SELECTED':
      return {
        ...state,
        tabSelected: action.tabSelected,
      };
      case 'SET_FILTER_SET':
      return {
        ...state,
        filterSet: action.filterSet,
      };
    default:
      return state;
  }
};