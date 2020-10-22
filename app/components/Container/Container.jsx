import React, { useState } from "react";
import PropTypes from "prop-types";
import { Wraper } from "./styles";
import Seasons from "../Seasons";
import Drivers from "../Drivers";

function Container(props) {
  const [year, setYear] = useState("");

  return (
    <Wraper>
      <div>Container</div>;
      <Seasons setYear={setYear} />
      <Drivers year={year} />
    </Wraper>
  );
}

Container.propTypes = {};

export default Container;
