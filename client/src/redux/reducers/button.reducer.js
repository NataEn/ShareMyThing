import { BUTTON_CLICK } from "../actions/types";

const initialState = {
  clicked: false,
};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICK:
      return { ...state, clicked: action.payload };
    default:
      return state;
  }
};
export default buttonReducer;
