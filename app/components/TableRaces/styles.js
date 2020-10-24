import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  color: var(--black);
  margin: var(--gPadding);
  width: var(--width-cards);
  border: 1px solid var(--gray-4);
`;

export const Header = styled.div`
  width: 40%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: var(--gPadding);
  background: var(--gray-4);

  h2 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    word-break: break-all;
    text-transform: capitalize;
  }

  p {
    font-size: 13px;
  }
`;

export const Details = styled.div`
  width: 60%;
  display: flex;
  font-size: 14px;
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
