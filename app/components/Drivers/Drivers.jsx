import React from "react";
import PropTypes from "prop-types";
import { useFetchGet } from "../../hooks";

function Drivers(props) {
  const { year } = props;

  const { loadingData, data } = useFetchGet(
    `${year}/drivers.json`,
    "MRData.DriverTable.Drivers",
    [year]
  );

  return (
    <div>
      {loadingData && <p>Loading... </p>}
      {!loadingData &&
        data &&
        data.map((info, index) => (
          <div key={index}>
            code: {info.code}
            dateOfBirth: {info.dateOfBirth}
            driverId: {info.driverId}
            familyName: {info.familyName}
            givenName: {info.givenName}
            nationality: {info.nationality}
            url: {info.url}
          </div>
        ))}
    </div>
  );
}

Drivers.propTypes = {
  year: PropTypes.string.isRequired,
};

export default Drivers;
