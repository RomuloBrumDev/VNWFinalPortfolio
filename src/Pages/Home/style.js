import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
  font-weight: bold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  align-items: center;

  @media (max-width: 810px) {
    font-size: 4rem;
  }
`;
export const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  `;
export const Div = styled.div`
  width: 100%;
  min-height: 22rem;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  @media (max-width: 810px) {
    width: 100%;
    flex-direction:column-reverse;
  }
  `;

export const Box1 = styled.div`
  width: 60%;
  min-height: 2.5rem;
  
  @media (max-width: 810px) {
    width: 100%;
    font-size: 4rem;
  }
`;
export const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  width: 100%;
  color: #74ee15;
  letter-spacing: 5px;
  
  @media (max-width: 810px) {
    width: 100%;
    font-size: 2rem;
    text-align: center;
  }
`;
export const Img = styled.img`
  width: 30%;
  height: 30%;
  object-fit: cover;
  object-position: center;
  align-self: center;
  border: solid #74ee15 2px;
  border-radius: 150px 150px 150px 0px;
`;
export const PillBox = styled.div`
  width: 100%;
  min-height: 10rem;
  margin-top: 2rem; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PillItems = styled.div`
  width:48%;
  min-height: 2.5rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 810px) {
    width: 50%;
    font-size: 4rem;
  }
`;
export const P = styled.p`
  width: 22rem;
  height: 4rem;
  font-size: 2.6rem;
  color: #74ee15;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  
  @media (max-width: 810px) {
    width: 100%;
    font-size: 2rem;
  }
`;
export const RPill = styled.img`
  width: 8rem;
`;
export const BPill = styled.img`
  width: 8rem;
`;

// export const Ul = styled.ul`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     @media (max-width: 640px) {
//         display: none;
//     }
