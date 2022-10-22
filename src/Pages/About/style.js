import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Section = styled.section`
  width: 98%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  @media (max-width: 810px) {
    flex-direction: column;
  }
`;
export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  align-items: center;

@media (max-width: 810px) {
  font-size: 4rem;
}
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 20rem;
`;
export const Img = styled.img`
  width: 250px;
  height: 270px;
  object-fit: cover;
  object-position: center;
  border: solid #74ee15 2px;
  border-radius: 50px 50px 50px 0px;
`;
export const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  width: 18rem;
  color: #74ee15;
  letter-spacing: 5px;
`;
export const Container = styled.section`
  width: 86%;
  background: rgba(11, 1, 1, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  display: flex;
  flex-wrap: wrap;
  
  @media (max-width: 810px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
export const Box1 = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-text-stroke-width: 0.7px;
  -webkit-text-stroke-color: #fff;
  width: 100%;
  height: auto;
`;
export const P = styled.p`
  width: 95%;
  font-family: 'TechnoBoard';
  font-size: 1.8rem;
  color: #74ee15;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Box2 = styled.div`
  width: 50%;
  height: auto;
  margin-top: 32px;
  display: flex;
  flex-direction: column;

@media (max-width: 810px) {
  width: 100%;
}
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  min-height: 200px;
`;
export const Li = styled.li`
  width: 100%;
  height: auto;
  font-family: 'Techfont';
  font-size: 1.8rem;
  color: #74ee15;
  display: flex;
  justify-content: center;
  align-content:center;
`;
