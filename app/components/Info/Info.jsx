import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Text } from "./styles";
import Icon from "../Icon";

function Info(props) {
  const { text, icon, className = "" } = props;

  return (
    <Wrapper className={className}>
      <Icon name={icon} className="infoIcon" />
      <Text data-test="text">{text}</Text>
    </Wrapper>
  );
}

Info.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Info;
