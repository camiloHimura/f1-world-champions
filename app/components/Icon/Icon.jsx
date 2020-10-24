import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";

function Icon(props) {
  const {
    style = {},
    name,
    color = "",
    pointer = false,
    onClick,
    className = "",
  } = props;

  return (
    <Wrapper
      onClick={onClick}
      className={`material-icons ${className} ${color} ${
        pointer ? "pointer" : ""
      }`}
      style={style}
      data-test="icon"
    >
      {name}
    </Wrapper>
  );
}

Icon.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  pointer: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Icon;
