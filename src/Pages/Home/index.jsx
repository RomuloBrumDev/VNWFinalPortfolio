import React from "react";
import * as S from "./style";
import Retrato from "../../assets/images/FotoPerfil.jpg";
import RedPill from "../../assets/images/RedPill.png";
import BluePill from "../../assets/images/BluePill.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <S.Main>
      <S.H1>Portifólio</S.H1>
      <S.Section>
        <S.Div>
          <S.Box1>
            <S.H2>Sejam bem vindes ao meu espaço.</S.H2>
            <S.H2>A partir de agora, você pode escolher:</S.H2>
          </S.Box1>
          <S.Img src={Retrato} alt="Foto de Rômulo" />
        </S.Div>
        <S.PillBox>
          <S.PillItems>
            <Link to="projects">
              <S.RPill src={RedPill} alt="Pílula Vermelha" />
            </Link>
            <S.P>Despertar o Código</S.P>
          </S.PillItems>
          <S.PillItems>
            <Link to="*">
              <S.BPill src={BluePill} alt="Pílula Azul" />
            </Link>
            <S.P>Voltar a Sonhar</S.P>
          </S.PillItems>
        </S.PillBox>
      </S.Section>
    </S.Main>
  );
}
