import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  color: var(--black);
  border: 1px solid var(--gray-4);
  border-bottom: none;

  &.header {
    font-weight: bold;
    text-align: center;
  }
`;

export const Header = styled.div`
  width: 40%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: var(--gPadding);
  border-right: 1px solid var(--gray-4);

  &.multipleWins {
    background: var(--green);
  }

  span {
    text-transform: capitalize;
  }
`;

export const Details = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: var(--gPadding);
  justify-content: space-between;
`;

export const Link = styled.a`
  outline: none;
  margin-left: auto;
  width: fit-content;
  border-radius: 10px;
  color: var(--blue-4);
  display: inline-block;
  text-decoration: none;
`;
