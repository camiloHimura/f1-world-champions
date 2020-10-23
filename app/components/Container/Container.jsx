import React, { useState } from "react";
import { Wraper } from "./styles";
import Seasons from "../Seasons";
import Drivers from "../Drivers";
import { FIRST_SEASON } from "../../contans";

function Container() {
  const [year, setYear] = useState("");
  const limit = new Date().getFullYear() + 1 - FIRST_SEASON;

  return (
    <Wraper>
      <Seasons setYear={setYear} limit={limit} />
      <Drivers year={year} />
    </Wraper>
  );
}

export default Container;
