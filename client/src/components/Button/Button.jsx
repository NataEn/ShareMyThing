import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toggleClick } from "../../redux/actions/button.actions";
/**
 *
 * @param {String} text the text inside the button
 * @returns
 */

export default function Button({ text }) {
  const dispatch = useDispatch();
  const buttonState = useSelector((state) => state.button);
  return (
    <button onClick={() => dispatch(toggleClick(buttonState.clicked))}>
      {text}- current click state: {String(buttonState.clicked)}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};
