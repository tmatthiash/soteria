
import { Action } from "./action";


interface State {
  tabSelected: "list" | "new";
}

export const defaultState: State = {
  tabSelected: "list",
};

export const Reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case "SET_TAB_SELECTED":
      return {
        ...state,
        tabSelected: action.tabSelected,
      };
    default:
      return state;
  }
};
