import ActionTypes from "../actions/types";

const bufferToBase64Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ActionTypes.items.GET_ITEMS: {
      const items = action.payload;
      const modifiedItems = items.map((item) => {
        const images = item.images.map(
          (buffer) =>
            `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`
        );
        return { ...item, images };
      });
      store.dispatch({
        type: ActionTypes.items.ITEMS_MODIFIED,
        payload: modifiedItems,
      });
      break;
    }
    case ActionTypes.users.USER_LOADED: {
      const user = action.payload;
      const buffer = user.avatar;
      const avatar = `data:image/jpeg;base64,${Buffer.from(buffer).toString(
        "base64"
      )}`;

      store.dispatch({
        type: ActionTypes.users.USER_AVATAR_MODIFIED,
        payload: { ...user, avatar },
      });
      break;
    }
    default: {
      next(action);
    }
  }
};

export default bufferToBase64Middleware;
