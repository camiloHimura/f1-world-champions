import styled from "styled-components";

export const Wrapper = styled.span`
  &::selection {
    background: transparent;
  }

  &.pointer {
    cursor: pointer;
  }
`;
