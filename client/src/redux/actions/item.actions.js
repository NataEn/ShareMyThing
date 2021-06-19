import axios from "axios";
import ActionTypes from "./types";

const items = ActionTypes.items;

export const setItemsLoading = () => {
  return {
    type: items.ITEMS_LOADING,
  };
};
export const itemsModified = () => {
  return {
    type: ActionTypes.items.ITEMS_MODIFIED,
  };
};

export const filterItems = (searchStr) => {
  debugger;
  return {
    type: ActionTypes.items.FILTER_ITEMS,
    payload: searchStr,
  };
};

export const getItems = () => async (dispatch, getState) => {
  dispatch(setItemsLoading());
  const res = await axios.get("api/items").catch((err) => console.error(err));
  const data = res.data.items;
  return dispatch({ type: items.GET_ITEMS, payload: data });
};

export const deleteItem = (id) => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .delete("api/items", { data: { id } })
    .then((res) => {
      dispatch({
        type: items.DELETE_ITEM,
        payload: id,
      });
    })
    .catch((err) => console.error(err));

  return {
    type: items.DELETE_ITEM,
    payload: id,
  };
};
export const addItem = (item) => (dispatch) => {
  dispatch(setItemsLoading());
  axios.post("api/items", item).then((res) =>
    dispatch({
      type: items.ADD_ITEM,
      payload: res.data.item,
    })
  );
};
