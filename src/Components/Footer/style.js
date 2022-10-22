import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 125px;
`;
export const Section = styled.section`
  background: Blue;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  background: rgba(11, 1, 1, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 2rem;
  height: 3.2rem;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #fff;
  color: #74ee15;
  letter-spacing: 5px;
`;
export const Ul = styled.ul`
  height: 3.2rem;
  display: flex;
  align-items: center;
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20px;
  height: 20px;
  margin: 24px;
  /* font-size: 1.8rem; */
`;
export const Image = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  filter: hue-rotate(90deg) invert(135) brightness(2);
  border-radius: 50%;
`;
export const P = styled.p`
  width: 100vw;
  height: auto;
  margin-top: 10px;
  text-align: center;
  font-size: 1.3rem;
  color: #74ee15;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 810px) {
    font-size: 1rem;
  }
`;
