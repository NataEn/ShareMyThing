import { BUTTON_CLICK } from "./types.js";
/**
 *
 * @param {Boolean} clicked the current clicked state
 * @returns
 */
export const toggleClick = (clicked) => {
  return {
    type: BUTTON_CLICK,
    payload: !clicked,
  };
};
