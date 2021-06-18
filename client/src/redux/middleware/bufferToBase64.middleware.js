import ActionTypes from "../actions/types";

const bufferToBase64Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ActionTypes.items.GET_ITEMS: {
      console.log("before changing the images");
      console.log("the items", action.payload);
      const items = action.payload;
      console.log("before middleware fore each");
      const modifiedItems = items.map((item) => {
        const images = item.images.map(
          (buffer) =>
            `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`
        );
        return { ...item, images };
      });
      debugger;
      store.dispatch({
        type: ActionTypes.items.ITEMS_MODIFIED,
        payload: modifiedItems,
      });
      break;
    }
    default: {
      next(action);
    }
  }
};

export default bufferToBase64Middleware;
