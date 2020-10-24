import React, { useState } from "react";
import { Wraper } from "./styles";
import Seasons from "../Seasons";
import Races from "../Races";

function Container() {
  const [year, setYear] = useState("");

  return (
    <Wraper>
      <Seasons setYear={setYear} />
      <Races year={year} />
    </Wraper>
  );
}

export default Container;
