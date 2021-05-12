
import { Action } from "./action";


interface State {
  tabSelected: "list" | "new";
}

const defaultState: State = {
  tabSelected: "list",

};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: State = defaultState, action: Action): State => {
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
