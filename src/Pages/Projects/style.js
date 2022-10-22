import styled from "styled-components";

export const Main = styled.main``;
export const H1 = styled.h1`
  width: 100%;
  height: 6rem;
  font-weight: bold;
  text-align: center;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #fff;
  align-items: center;

  @media (max-width: 810px) {
    font-size: 4rem;
  }
`;
export const H2 = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  width: 100%;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #fff;
  color: #74ee15;
  letter-spacing: 5px;

  @media (max-width: 810px) {
    font-size: 2rem;
  }
`;
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 810px) {
    flex-direction: column;
  }
`;
export const Li = styled.li`
  width: 100%;
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  width: 100%;
  min-width: 250px;
  height: auto;
  min-height: 270px;
  object-fit: contain;
  object-position: top;

  @media (max-width: 810px) {
    margin-bottom: 16px;
  }
`;
export const Label = styled.h3`
  font-size: 1.5rem;
`
export const DescriptionText = styled.p`
  width: 80%;
  font-size: 1.2rem;
  text-align: center;
  a {
    color: #74ee15;
    text-decoration: underline;
  }
`
