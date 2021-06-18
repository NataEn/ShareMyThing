import ActionTypes from "./../actions/types";

const errors = ActionTypes.errors;

const initialState = {
  msg: {},
  status: null,
  id: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case errors.GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case errors.CLEAR_ERRORS:
      return { msg: {}, status: null, id: null };
    default:
      return state;
  }
};
export default errorReducer;
