import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";

function Card(props) {
  const {
    driverId,
    nationality,
    dateOfBirth,
    familyName,
    givenName,
    url,
  } = props;
  return (
    <Wrapper>
      driverId: {driverId}
      <br />
      nationality: {nationality}
      <br />
      dateOfBirth: {dateOfBirth}
      <br />
      familyName: {familyName}
      <br />
      givenName: {givenName}
      <br />
      <a href={url} target="blank">
        More Info
      </a>
    </Wrapper>
  );
}

Card.propTypes = {
  driverId: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
