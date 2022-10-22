import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

export default function Nav() {
  return (
    <S.Main>
      <S.Ul>
        <S.Li>
          <Link to="/">Home</Link>
        </S.Li>
        <S.Li>
          <Link to="about">About</Link>
        </S.Li>
        <S.Li>
          <Link to="projects">Projects</Link>
        </S.Li>
        <S.Li>
          <Link to="onu">Onu</Link>
        </S.Li>
      </S.Ul>
    </S.Main>
  );
}
