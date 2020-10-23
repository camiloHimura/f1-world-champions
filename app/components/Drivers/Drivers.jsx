import React from "react";
import PropTypes from "prop-types";
import { useFetchGet } from "../../hooks";
import { Wrapper } from "./styles";
import Loader from "../Loader";
import Card from "../Card";

function Drivers(props) {
  const { year } = props;

  const { loading, data } = useFetchGet({
    url: `${year}/drivers.json`,
    path: "MRData.DriverTable.Drivers",
    dependencies: [year],
  });

  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.map((info, index) => (
          <Card key={`${index}-${info.driverId}`} {...info} />
        ))}
    </Wrapper>
  );
}

Drivers.propTypes = {
  year: PropTypes.string.isRequired,
};

export default Drivers;
