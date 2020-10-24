import React from "react";
import PropTypes from "prop-types";
import { useFetchGet } from "../../hooks";
import { Wrapper } from "./styles";
import Loader from "../Loader";
import TableRaces from "../TableRaces";
import Info from "../Info";

function Races(props) {
  const { year } = props;

  const { loading, error, data } = useFetchGet({
    url: `${year}/results/1.json`,
    path: "MRData.RaceTable.Races",
    dependencies: [year],
    map: (info) => {
      console.log(info);
      return info.map((circuit) => ({
        name: circuit.raceName,
        date: circuit.date,
        url: circuit.url,
        country: circuit.Circuit.Location.country,
        winner: {
          familyName: circuit.Results[0].Driver.familyName,
          givenName: circuit.Results[0].Driver.givenName,
          nationality: circuit.Results[0].Driver.nationality,
        },
      }));
    },
  });

  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading && data && <TableRaces data={data} />}
      {!loading && error && (
        <Info
          data-test="no-data"
          icon="error"
          text="No data available"
          className="center"
        ></Info>
      )}
    </Wrapper>
  );
}

Races.propTypes = {
  year: PropTypes.string.isRequired,
};

export default Races;
