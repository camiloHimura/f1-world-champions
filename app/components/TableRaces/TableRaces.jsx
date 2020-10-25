import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Header, Details, Link } from "./styles";
import Info from "../Info";

function TableRaces(props) {
  const { data } = props;

  return (
    <>
      <Wrapper className="header">
        <Header>Race Name</Header>
        <Details>Winer</Details>
      </Wrapper>

      {data.map(({ name, url, country, winner }, index) => (
        <Wrapper key={`circuit-${index}`} data-test="race">
          <Header
            data-test="header"
            style={{ backgroundColor: winner.multipleWins ? winner.color : "" }}
          >
            <h2>
              <span>{name}</span> / {country}
            </h2>
          </Header>
          <Details>
            <Info
              icon="account_circle"
              text={`${winner.givenName} ${winner.familyName} / ${winner.nationality}`}
            ></Info>
            <Link data-test="link" href={url} target="blank">
              More...
            </Link>
          </Details>
        </Wrapper>
      ))}
    </>
  );
}

TableRaces.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      winner: PropTypes.shape({
        color: PropTypes.string,
        driverId: PropTypes.string.isRequired,
        givenName: PropTypes.string.isRequired,
        familyName: PropTypes.string.isRequired,
        nationality: PropTypes.string.isRequired,
        multipleWins: PropTypes.bool.isRequired,
      }),
    })
  ).isRequired,
};

export default TableRaces;
