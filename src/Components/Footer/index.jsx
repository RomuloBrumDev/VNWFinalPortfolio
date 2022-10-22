import React from "react";
import * as S from "./style";
import GitHub from "../../assets/images/GitHubLogo.png";
import Email from "../../assets/images/EmailLogo.png";
import LinkedIn from "../../assets/images/LinkedInLogo.png";
import Telefone from "../../assets/images/TelLogo.png";

export default function Footer() {
  return (
    <S.Footer>
      <S.Section>
        <S.H2>Fale Comigo: </S.H2>
        <S.Ul>
          <S.Li>
            <a
              href="https://github.com/RomuloBrumDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.Image src={GitHub} alt="Logo GitHub" />
            </a>
          </S.Li>
          <S.Li>
            <a
              href="https://www.linkedin.com/in/romulo-brum-rj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.Image src={LinkedIn} alt="Logo LinkedIn" />
            </a>
          </S.Li>
          <S.Li>
            <a href="https://wa.me/message/4AKXZUE53BGLO1">
              <S.Image src={Telefone} alt="Logo Telefone" />
            </a>
          </S.Li>
          <S.Li>
            <S.Image src={Email} alt="Logo Email" />
          </S.Li>
        </S.Ul>
      </S.Section>
      <S.P>
        Trabalho de conclusão do curso de FrontEnd oferecido por VaiNaWeb em
        2022
      </S.P>
    </S.Footer>
  );
}
