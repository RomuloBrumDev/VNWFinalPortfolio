import React from "react";
import * as S from "./style";
import FotoRomulo from "../../assets/images/FotoRight.jpg";

export default function About() {
  return (
    <S.Main>
      <S.H1>Sobre Mim</S.H1>
      <S.Section>
        <S.Profile>
          <S.Img src={FotoRomulo} alt="Foto do Romulo" />
          <S.H2>Romulo Brum</S.H2>
        </S.Profile>
        <S.Container>
          <S.Box1>
            <S.P>
              Natural do Rio de Janeiro, casado, em transição de carreira.
              Através do Vai na Web, iniciei a formação em Front End, em busca
              de realizar novos sonhos.
            </S.P>
          </S.Box1>
          <S.Box2>
            <S.P>Hobbies</S.P>
            <S.Ul>
              <S.Li>Jogar Vídeo Games</S.Li>
              <S.Li>Assistir /Filmes e Séries</S.Li>
              <S.Li>Cuidar de Plantas</S.Li>
              <S.Li>Ler e Estudar Assuntos Variados</S.Li>
            </S.Ul>
          </S.Box2>
          <S.Box2>
            <S.P>Idiomas que Falo/Escrevo:</S.P>
            <S.Ul>
              <S.Li>Português</S.Li>
              <S.Li>Inglês</S.Li>
              <S.Li>Espanhol</S.Li>
            </S.Ul>
          </S.Box2>
          <S.Box1>
            <S.P>
              Sonhos e Planos: Ser um excelente desenvolvedor e quem sabe um dia
              poder ajudar, inspirando e ensinando outras pessoas. Ajudar
              pessoas a mudarem de vida através do meu trabalho e conhecimentos.
              Quem sabe morar, trabalhar e viver fora do país.
            </S.P>
          </S.Box1>
        </S.Container>
      </S.Section>
    </S.Main>
  );
}
