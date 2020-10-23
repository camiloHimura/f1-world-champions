import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Wrapper, Title, Container } from "./styles";

function Grouper(props) {
  const { data = [], numElements, onSelected } = props;
  const [groups, setGroups] = useState([]);
  const [aciveId, setAciveId] = useState(null);

  useEffect(() => {
    let nData = [...data];
    const groups = [];
    while (nData.length) {
      groups.push(nData.splice(0, numElements));
    }
    setGroups(groups);

    console.log(numElements, data);
    console.log("groups", groups);
  }, [data]);

  return (
    <>
      {groups.map((group, index) => (
        <Wrapper key={`title-${index}`}>
          <Title>{group[0].season}</Title>
          <Container>
            {group.map(({ season }, iIndex) => {
              const id = `group-${index}-${iIndex}`;
              return (
                <span
                  key={id}
                  className={aciveId == id ? "--active" : ""}
                  onClick={() => {
                    onSelected(season);
                    setAciveId(id);
                  }}
                >
                  {season}
                </span>
              );
            })}
          </Container>
        </Wrapper>
      ))}
    </>
  );
}

Grouper.propTypes = {
  /* Element: PropTypes.func.isRequired, */
  onSelected: PropTypes.func.isRequired,
  numElements: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      season: PropTypes.string,
    })
  ).isRequired,
};

export default Grouper;
