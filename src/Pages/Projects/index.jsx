import React from "react";
import * as S from "./style";
import Screenshot_HP from "../../assets/images/Project_HP.png";
import Screenshot_LOL from "../../assets/images/Project_LOL.png";
import Screenshot_Portflow from "../../assets/images/Project_Portflow.png";

export default function Projects() {
  return (
    <S.Main>
      <S.H1>Projetos</S.H1>
      <S.H2>Conheçam alguns de meus projetos:</S.H2>
      <S.Ul>
        <S.Li>
          <S.Image src={Screenshot_Portflow} alt="Tela Portflow" />
          <S.Label>Desafio de conclusão do Modulo Inicial</S.Label>
          <S.DescriptionText>
            Tecnologias utilizadas: HTML5 e CSS3
          </S.DescriptionText>
        </S.Li>
        <S.Li>
          <S.Image src={Screenshot_LOL} alt="Tela LOL" />
          <S.Label>Desafio Tela de Login</S.Label>
          <S.DescriptionText>
            Desafio proposto em sala de aula para aprendermos lógicas condicionais.
          </S.DescriptionText>
        </S.Li>
        <S.Li>
          <S.Image src={Screenshot_HP} alt="Tela Harry Potter" />
          <S.Label>Projeto personagens filmes Harry Potter</S.Label>
          <S.DescriptionText>
            Desafio proposto em sala de aula para aprendermos a consumir APIs com AXIOS - Utilizando API pública - <a target='_target' href="https://hp-api.herokuapp.com/">HP-API</a>
          </S.DescriptionText>
        </S.Li>
      </S.Ul>
    </S.Main>
  );
}
