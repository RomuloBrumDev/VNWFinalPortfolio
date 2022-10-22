// import React from "react";
import Nav from "../Nav";
import * as S from "./style";


export default function Header() {
  console.log("S", S)
  return (
    <S.Header>
      <Nav />
    </S.Header>
  );
}
