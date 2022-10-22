import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;
  font-weight: bold;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #fff;
  align-items: center;

  @media (max-width: 810px) {
    font-size: 4rem;
  }
`;
export const Box1 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const H2 = styled.h2`
  width: 95%;
  font-size: 2.8rem;
  color: #74ee15;
  text-align: center;
  letter-spacing: 5px;

  @media (max-width: 810px) {
    font-size: 2rem;
  }
`;
export const Img = styled.img`
  height: 40vh;
`;
export const Box2 = styled.section`
  width: 100%;
  min-height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const PillBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Pill = styled.img`
  width: 10rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;
  
export const P = styled.p`
  width: 100%;
  font-size: 2rem;
  color: #74ee15;
  text-align: center;
`;