import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-weight: bold;
  color: var(--white);
  margin-bottom: 10px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: var(--white);
  margin-bottom: 20px;

  & span {
    cursor: pointer;
    position: relative;
    margin: 10px 8px 10px;

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
