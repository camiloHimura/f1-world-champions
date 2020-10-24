import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Header, Details, Link } from "./styles";
import Info from "../Info";

function TableRaces(props) {
  const { data } = props;

  return data.map(({ name, url, country, winner }, index) => (
    <Wrapper key={`circuit-${index}`}>
      <Header>
        <h2>{name}</h2>
        <p>{country}</p>
      </Header>
      <Details>
        <Info
          icon="account_circle"
          text={`${winner.givenName} ${winner.familyName}`}
        ></Info>
        <Info icon="flag" text={winner.nationality}></Info>
        <Link href={url} target="blank">
          More...
        </Link>
      </Details>
    </Wrapper>
  ));
}

TableRaces.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      winner: PropTypes.shape({
        familyName: PropTypes.string.isRequired,
        givenName: PropTypes.string.isRequired,
        nationality: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default TableRaces;
