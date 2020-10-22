import React from "react";
import PropTypes from "prop-types";
import { useFetchGet } from "../../hooks";

function Sesons(props) {
  const { setYear } = props;
  const { loadingData, data } = useFetchGet(
    "seasons.json",
    "MRData.SeasonTable.Seasons"
  );

  return (
    <div>
      {loadingData && <p>Loading... </p>}
      {!loadingData &&
        data &&
        data.map((info, index) => (
          <div key={index} onClick={() => setYear(info.season)}>
            {info.season}
          </div>
        ))}
    </div>
  );
}

Sesons.propTypes = {
  setYear: PropTypes.func.isRequired,
};

export default Sesons;
