import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFetchGet } from "../../hooks";
import { Wrapper, Link } from "./styles";
import Loader from "../Loader";
import Grouper from "../Grouper";

function Sesons(props) {
  const { setYear, limit } = props;

  const { loading, data } = useFetchGet({
    url: `seasons.json?limit=${limit}`,
    path: "MRData.SeasonTable.Seasons",
    /* map: (data) => data.reverse(), */
  });

  return (
    <Wrapper>
      {loading && <Loader />}
      {
        !loading && data && (
          <Grouper data={data} onSelected={setYear} numElements={10} />
        )
        /* data.map((info, index) => (
          <Link
            key={info.season}
            onClick={() => {
              setYear(info.season);
              setActive(index);
            }}
          >
            <span
              className={active == index && "--active"}
              style={{ marginLeft: `${(index % 10 | 0) * 4}%` }}
            >
              {info.season}
            </span>
          </Link>
        )) */
      }
    </Wrapper>
  );
}

Sesons.propTypes = {
  limit: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
};

export default Sesons;
