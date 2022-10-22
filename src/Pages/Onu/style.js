import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;
  font-weight: bold;
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  align-items: center;

  @media (max-width: 810px) {
    font-size: 4rem;
  }
`;
export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2.8rem;
  width: 100%;
  color: #74ee15;
  text-align: center;
  letter-spacing: 5px;

  @media (max-width: 810px) {
    font-size: 2rem;
  }
`;
export const Ul = styled.ul`
  width: 100%;
  min-height: 45vh;
  padding: 0 5%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 810px) {
    width: auto;
    height: auto;
  }
`;
export const Li = styled.li`
  padding: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  width: 10rem;
  height: 10rem;
  /* filter: hue-rotate(90deg) invert(135) brightness(2); */
  border-radius: 50%;
`;
export const ModalTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 6rem;
  margin: 15px 0;
  font-weight: bold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  text-align: center;

  @media (max-width: 1160px) {
    font-size: 4rem;
  }
  
  @media (max-width: 810px) {
    min-height: auto;
    font-size: 2.8rem;
  }
`;
export const ModalP = styled.p`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  width: 100%;
  height: auto;
`;
export const ModalButton = styled.button`
  margin: 0 auto;
  font-size: 1.4rem;
  background-color: #74ee15;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
`;
