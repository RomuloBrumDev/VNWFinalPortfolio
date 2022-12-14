import React, { useState } from "react";
import Modal from "react-modal";

import * as S from "./style";

// Images
import ColetaSeletiva from "../../assets/images/lixeiraNeon.png";
import Seguranca from "../../assets/images/cadeadoNeon.png";
import Iluminacao from "../../assets/images/iluminacaoVerde.png";
import TransportePublico from "../../assets/images/onibusNeon.png";
import CortesiaRespeito from "../../assets/images/dialogo2Pessoas.png";
import RespeitoSilencio from "../../assets/images/relogioNeon.png";

const customModalStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    width: "70%",
    height: "70%",
    padding: "30px 5%",
    backgroundColor: "black",
    overflowY: "auto",
    position: "relative",
    inset: "0",
    display: "flex",
    textAllign: "Center",
    flexDirection: "column",
    justifyContent: "space-between"
  }
};

export default function Onu() {
  const [recicleModal, setRecicleModal] = useState(false);
  const [securityModal, setSecurityModal] = useState(false);
  const [greenEnergyModal, setGreenEnergyModal] = useState(false);
  const [publicTransportModal, setPublicTransportModal] = useState(false);
  const [comunicationModal, setComunicationModal] = useState(false);
  const [silenceLawModal, setSilenceLawModal] = useState(false);

  function handleRecicleModal() {
    setRecicleModal(!recicleModal);
  }
  function handleSecurityModal() {
    setSecurityModal(!securityModal);
  }
  function handleGreenEnergyModal() {
    setGreenEnergyModal(!greenEnergyModal);
  }
  function handlePublicTransportModal() {
    setPublicTransportModal(!publicTransportModal);
  }
  function handleComunicationModal() {
    setComunicationModal(!comunicationModal);
  }
  function handleSilenceLawModal() {
    setSilenceLawModal(!silenceLawModal);
  }

  return (
    <>
      <Modal
        isOpen={recicleModal}
        onRequestClose={handleRecicleModal}
        style={customModalStyles}
      >
        <S.ModalTitle>Recicle</S.ModalTitle>
        <S.ModalP>
          A coleta seletiva ?? algo que infelizmente ainda n??o ?? explorada em
          nosso bairo. Uma conscientiza????o dos moradores de 6 condom??nios
          localizados em minha localidade, j?? seria um grande passo e incentivo,
          para a popula????o. Al??m disso seria uma grande maneira de ajudar a
          comunidade de catadores que, constantemente, est??o cerca desses
          condom??nios. Al??m de ajudar o meio ambiente, na melhor destina????o de
          nossos res??duos do dia-a-dia. Uma outra situa????o, seria o incentivo na
          cria????o de ??reas de compostagens, para adubo e fertiliza????o das
          plantas do condom??nio, uma vez que res??duos org??nicos s??o eliminados
          diariamente. Essa seria uma forma de incentivar e educar as crian??as
          que residem na localidade quanto preserva????o do meio-ambiente.
        </S.ModalP>
        <S.ModalButton onClick={handleRecicleModal}>x</S.ModalButton>
      </Modal>
      <Modal
        isOpen={securityModal}
        onRequestClose={handleSecurityModal}
        style={customModalStyles}
      >
        <S.ModalTitle>Seguran??a</S.ModalTitle>
        <S.ModalP>
          A busca por meios de tornar a vizinhan??a mais segura, deve come??ar por
          identificar junto aos moradores, quais as princiupais demandas,
          verificar ocorr??ncias e estimular o registro online de BO (Boletins de
          Ocorr??ncia) Online. De posse dessas informa????es deve ser solicitado
          patrulhas regulares, bem como solicitar a Secretaria de Seguran??a
          Estadual, o refor??o da vigil??ncia da localizade. Verificar junto a
          c??mara municipal, mediante a apresenta????o de projetos, sugest??es para
          a melhoria da vigil??ncia, junto aos vereadores eleitos e que pertencem
          a comunidade.
        </S.ModalP>
        <S.ModalButton onClick={handleSecurityModal}>x</S.ModalButton>
      </Modal>
      <Modal
        isOpen={greenEnergyModal}
        onRequestClose={handleGreenEnergyModal}
        style={customModalStyles}
      >
        <S.ModalTitle>Energia Verde</S.ModalTitle>
        <S.ModalP>
          Estimular o baixo consumo de energia ?? uma forma de instigar as
          pessoas: Economia - Porque pode ser sentida no pr??prio bolso;
          Fiscaliza????o - Porque evita o roubo/furto de energia, que acaba
          pesando no bolso de todas as demais pessoas, que n??o fazem uso dessa
          pr??tica; Valoriza????o do Servi??o P??blico - Porque uma regi??o bem
          iluminada e que faz uso de tecnologia verde, torna-se mais segura e
          ajuda ao planeta na redu????o do consumo desregrado dos recursos
          naturais;
        </S.ModalP>
        <S.ModalButton onClick={handleGreenEnergyModal}>x</S.ModalButton>
      </Modal>
      <Modal
        isOpen={publicTransportModal}
        onRequestClose={handlePublicTransportModal}
        style={customModalStyles}
      >
        <S.ModalTitle>Transporte P??blico</S.ModalTitle>
        <S.ModalP>Identificar junto a popula????o local, quais as sugest??es de linhas
          seriam mais necess??rias, verificar se alguma empresa j?? atende alguma das
          regi??es e ap??s sugerir implementa????es de novas linhas.
          Verificar a acessibilidade da popula????o local, para identificar quais as 
          principais demandas, bem como se h?? a necessidade de implementa????o de pontos
          de ??nibus cobertos e ilumina????o adequeda. 
        </S.ModalP>
        <S.ModalButton onClick={handlePublicTransportModal}>x</S.ModalButton>
      </Modal>
      <Modal
        isOpen={comunicationModal}
        onRequestClose={handleComunicationModal}
        style={customModalStyles}
      >
        <S.ModalTitle>Gentileza</S.ModalTitle>
        <S.ModalP>Estimular a cortesia e o trato para com todas as pessoas da regi??o,
          sejam: moradores, trabalhadores, empres??rios, prestadores de servi??o 
          e/ou catadores de lixo.
          Identificar os hor??rios de entrada e sa??da de empresas e institui????es de ensino 
          da localidade e estimular a comunica????o cort??s principalmente durante os hor??rios 
          de entradas e sa??da de alunos, uma vez que a educa????o e o respeito devem, n??o 
          apenas, ser ensinadas, sobretudo vivenciadas.
          Estimular a boa conviv??ncia entre todas as pessoas, independente de: ra??a, g??nero,
          orienta????o sexual, f?? ou cren??a, idade, etnia ou posi????o social. Afinal de contas,
          Respeito e Cortesia ?? bom e Todo Mundo gosta.  
        </S.ModalP>
        <S.ModalButton onClick={handleComunicationModal}>x</S.ModalButton>
      </Modal>
      <Modal
        isOpen={silenceLawModal}
        onRequestClose={handleSilenceLawModal}
        style={customModalStyles}
      >
        <S.ModalTitle>Lei do Sil??ncio</S.ModalTitle>
        <S.ModalP>De m??os dadas com a cortesia, vem o respeito a Lei do Sil??ncio. Antes de 
          tudo ?? preciso deixar claro que essa ?? uma Lei real e que varia de acordo com o 
          estado brasileiro, no Rio de Janeiro (RJ), em todo seu territ??rio ela ?? v??lida 
          das 20h at?? ??s 07h, onde o limite (m??ximo em decibel "dB") ?? de: at?? o maximo de 
          50 dB, fora desse hor??rio, o limite toler??vel ?? de 55 dB e em zonas industriais 
          os limites variam entre 70 db fora do hor??rio e 60 dB dentro do per??odo. Caso o 
          dia seguinte seja domingo ou feriado, a faixa de horario se extende at?? as 09:00
          (NBR-Norma Brasileira 10.151/2000 desenvolvida pela ABNT - Associa????o Brasileira 
          de Normas T??cnicas).
          </S.ModalP>
        <S.ModalButton onClick={handleSilenceLawModal}>x</S.ModalButton>
      </Modal>

      <S.Main>
        <S.H1>ONU Bairros</S.H1>
        <S.H2>Como posso ajudar o meu bairro:</S.H2>
        <S.Ul>
          <S.Li onClick={handleRecicleModal}>
            <S.Image src={ColetaSeletiva} alt="Logo Lixeira" />
          </S.Li>
          <S.Li onClick={handleSecurityModal}>
            <S.Image src={Seguranca} alt="Logo Seguran??a" />
          </S.Li>
          <S.Li onClick={handleGreenEnergyModal}>
            <S.Image src={Iluminacao} alt="Logo Ilumina????o" />
          </S.Li>
          <S.Li onClick={handlePublicTransportModal}>
            <S.Image src={TransportePublico} alt="Logo Transporte" />
          </S.Li>
          <S.Li onClick={handleComunicationModal}>
            <S.Image src={CortesiaRespeito} alt="Logo Di??logo" />
          </S.Li>
          <S.Li onClick={handleSilenceLawModal}>
            <S.Image src={RespeitoSilencio} alt="Logo Rel??gio" />
          </S.Li>
        </S.Ul>
      </S.Main>
    </>
  );
}
