import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: var(--gPadding);
  background: var(--black);
  width: var(--options-width);
  border-right: 1px solid black;
`;

export const Title = styled.div`
  font-weight: bold;
  background: var(--white);
  text-align: center;
  padding: var(--gPadding);
  margin-bottom: calc(var(--gPadding) * 2);
`;

export const Option = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: var(--white);
  margin-bottom: 20px;

  & span {
    margin: 0 auto;
    cursor: pointer;
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 4px;
      bottom: -5px;
      position: absolute;
      background: var(--blue-3);
      transform: scale3d(0, 1, 1);
    }

    &.--active::before {
      transition-duration: 0.3s;
      transform: scale3d(1, 1, 1);
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;
