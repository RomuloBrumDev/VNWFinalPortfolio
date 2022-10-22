import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import Morpheus from "../../assets/images/Morpheus.png";
import RedPill from "../../assets/images/RedPill.png";
import BluePill from "../../assets/images/BluePill.png";

export default function Error() {
  return (
    <S.Main>
      <S.H1>Erro 404</S.H1>
      <S.Box1>
        <S.H2>Você deseja sair da Matrix, mas pegou o caminho errado.</S.H2>
        <S.Img src={Morpheus} alt="Mãos segurando 2 pílulas" />
      </S.Box1>
      <S.Box2>
        <S.PillBox>
          <Link to="projects">
          <S.Pill src={RedPill} alt="Pilula vermelha a direita"/>
          </Link>
          <S.P>Escolha a vermelha e despertarás.</S.P>
        </S.PillBox>
        <S.PillBox>
          <Link link to="/">
          <S.Pill src={BluePill} alt="Pilula azul a esquerda" />
          </Link>
          <S.P>Escolha a Azul e voltarás a dormir.</S.P>
        </S.PillBox>
      </S.Box2>
    </S.Main>
  );
}
