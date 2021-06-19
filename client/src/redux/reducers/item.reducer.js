import ActionTypes from "./../actions/types";

const items = ActionTypes.items;

const initialState = {
  items: [],
  isLoading: false,
  filteredItems: [],
  filterStr: "",
};

const itemReducer = (state = initialState, action) => {
  console.log("in items reducer", action);
  switch (action.type) {
    case items.GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        filteredItems: action.payload,
      };
    case items.ITEMS_MODIFIED:
      console.log("in modified reducer");
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
        isLoading: false,
      };
    case items.ADD_ITEM:
      let newState = { ...state, isLoading: false };
      newState.items.push({
        ...action.payload,
      });
      return newState;
    case items.FILTER_ITEMS:
      debugger;

      const searchStr = action.payload;
      let newState3 = { ...state };
      newState3.filterStr = action.payload;
      const allItems = { ...newState3.items };
      if (!searchStr || searchStr.length === 0) {
        newState3.filteredItems = { ...allItems };
        return newState3;
      } else {
        const filtered = allItems.filter((item) => {
          debugger;
          const matchFromName = item.name ? item.name.match(searchStr) : null;
          const matchFromDescription = item.description.match(searchStr);
          const matchFromInUseBy = item.inUseBy
            ? item.inUseBy.match(searchStr)
            : null;
          const matchFromPublishedBy = item.publishedBy.match(searchStr);

          if (
            matchFromName ||
            matchFromDescription ||
            matchFromInUseBy ||
            matchFromPublishedBy
          ) {
            return item;
          }
        });
        newState3.filteredItems = filtered;
        return newState3;
      }

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
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default itemReducer;
