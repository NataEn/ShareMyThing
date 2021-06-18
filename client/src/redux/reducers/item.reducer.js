import ActionTypes from "./../actions/types";

const items = ActionTypes.items;

const initialState = {
  items: [],
  isLoading: false,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case items.GET_ITEMS:
      return { ...state, items: action.payload, isLoading: false };
    case items.ITEMS_MODIFIED:
      console.log("in mofiedified reduccer");
      return { ...state, items: action.payload };
    case items.ADD_ITEM:
      let newState = { ...state, isLoading: false };
      newState.items.push({
        ...action.payload,
      });
      return newState;
    case items.DELETE_ITEM:
      console.log("in delete item reducer", action.payload);
      return {
        ...state,
        isLoading: false,
        items: state.items.filter((item) => {
          return item._id !== action.payload;
        }),
      };
    case items.ITEMS_LOADING:
      console.log("in ITEMS_LOADING");
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default itemReducer;
