import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 0 auto;
  max-width: 480px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 0px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 32px 30px 0;
  }

  @media (min-width: 1280px) {
    max-width: 1440px;
    padding: 37px 112px 0;
  }
`;

export const Menu = styled.p`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 400;
  margin-right: 32px;
  cursor: pointer;
`;

export const FixedContainer = styled.button`
  position: fixed;
  right: 20px;
  top: 33.5px;
  border: none;
  background: none;
  z-index: 1;
  padding: 0;

  @media (min-width: 480px) {
    right: calc(50% - 222px);
  }

  @media (min-width: 768px) {
    top: 35.5px;
    right: calc(50% - 354px);
  }

  @media (min-width: 1280px) {
    top: 40.5px;
    right: 112px;
  }

  @media (min-width: 1440px) {
    top: 40.5px;
    right: calc(50% - 607px);
  }
`;

export const BurgenMenu = styled.div`
  fill: var(--main);
  stroke: var(--main);

  &:hover,
  &:focus {
    stroke: var(--accent);
    fill: var(--accent);

    color: var(--accent);
  }
`;
