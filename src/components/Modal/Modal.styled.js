import styled from "styled-components";

export const ModalMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--white);
  z-index: 1;
  overflow-y: hidden;
`;

export const ModalHeader = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 480px;
  justify-content: space-between;
  padding: 30px 20px 0;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 32px 30px 0;
  }

  @media (min-width: 1280px) {
    max-width: 1440px;
    padding: 37px 112px 0;
  }
`;

export const ModalTitle = styled.h2`
  color: var(--accent);
  font-size: 34px;
  text-transform: uppercase;
  height: 32px;
  font-weight: 400;
  cursor: pointer;
`;

export const ModalList = styled.ul`
  margin: 64px auto 0;
  width: 74px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  font-weight: 400;

  @media (min-width: 768px) {
    margin-top: 78px;
    gap: 36px;
    width: 123px;
  }

  @media (min-width: 1280px) {
    margin-top: 100px;
    gap: 48px;
    width: 150px;
  }
`;

export const ModalItem = styled.li`
  text-transform: uppercase;
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 64px;
  }
`;
