import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Title, Option } from "./styles";

function Sesons(props) {
  const { setYear } = props;
  const [aciveId, setAciveId] = React.useState(null);

  const seasons = Array.from({ length: 11 }).map(
    (_, index) => `${2005 + index}`
  );
  return (
    <Wrapper>
      <Title data-test="title">Seasons</Title>
      {seasons.map((info, index) => {
        const id = `info-${index}`;
        return (
          <Option key={id} data-test="option">
            <span
              className={aciveId == id ? "--active" : ""}
              onClick={() => {
                setYear(info);
                setAciveId(id);
              }}
            >
              {info}
            </span>
          </Option>
        );
      })}
    </Wrapper>
  );
}

Sesons.propTypes = {
  setYear: PropTypes.func.isRequired,
};

export default Sesons;
