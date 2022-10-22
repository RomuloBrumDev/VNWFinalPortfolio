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
          A coleta seletiva é algo que infelizmente ainda não é explorada em
          nosso bairo. Uma conscientização dos moradores de 6 condomínios
          localizados em minha localidade, já seria um grande passo e incentivo,
          para a população. Além disso seria uma grande maneira de ajudar a
          comunidade de catadores que, constantemente, estão cerca desses
          condomínios. Além de ajudar o meio ambiente, na melhor destinação de
          nossos resíduos do dia-a-dia. Uma outra situação, seria o incentivo na
          criação de áreas de compostagens, para adubo e fertilização das
          plantas do condomínio, uma vez que resíduos orgânicos são eliminados
          diariamente. Essa seria uma forma de incentivar e educar as crianças
          que residem na localidade quanto preservação do meio-ambiente.
        </S.ModalP>
        <S.ModalButton onClick={handleRecicleModal}>x</S.ModalButton>
      </Modal>
      <Modal
        isOpen={securityModal}
        onRequestClose={handleSecurityModal}
        style={customModalStyles}
      >
        <S.ModalTitle>Segurança</S.ModalTitle>
        <S.ModalP>
          A busca por meios de tornar a vizinhança mais segura, deve começar por
          identificar junto aos moradores, quais as princiupais demandas,
          verificar ocorrências e estimular o registro online de BO (Boletins de
          Ocorrência) Online. De posse dessas informações deve ser solicitado
          patrulhas regulares, bem como solicitar a Secretaria de Segurança
          Estadual, o reforço da vigilância da localizade. Verificar junto a
          câmara municipal, mediante a apresentação de projetos, sugestões para
          a melhoria da vigilância, junto aos vereadores eleitos e que pertencem
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
          Estimular o baixo consumo de energia é uma forma de instigar as
          pessoas: Economia - Porque pode ser sentida no próprio bolso;
          Fiscalização - Porque evita o roubo/furto de energia, que acaba
          pesando no bolso de todas as demais pessoas, que não fazem uso dessa
          prática; Valorização do Serviço Público - Porque uma região bem
          iluminada e que faz uso de tecnologia verde, torna-se mais segura e
          ajuda ao planeta na redução do consumo desregrado dos recursos
          naturais;
        </S.ModalP>
        <S.ModalButton onClick={handleGreenEnergyModal}>x</S.ModalButton>
      </Modal>
      <Modal
        isOpen={publicTransportModal}
        onRequestClose={handlePublicTransportModal}
        style={customModalStyles}
      >
        <S.ModalTitle>Transporte Público</S.ModalTitle>
        <S.ModalP>Identificar junto a população local, quais as sugestões de linhas
          seriam mais necessárias, verificar se alguma empresa já atende alguma das
          regiões e após sugerir implementações de novas linhas.
          Verificar a acessibilidade da população local, para identificar quais as 
          principais demandas, bem como se há a necessidade de implementação de pontos
          de ônibus cobertos e iluminação adequeda. 
        </S.ModalP>
        <S.ModalButton onClick={handlePublicTransportModal}>x</S.ModalButton>
      </Modal>
      <Modal
        isOpen={comunicationModal}
        onRequestClose={handleComunicationModal}
        style={customModalStyles}
      >
        <S.ModalTitle>Gentileza</S.ModalTitle>
        <S.ModalP>Estimular a cortesia e o trato para com todas as pessoas da região,
          sejam: moradores, trabalhadores, empresários, prestadores de serviço 
          e/ou catadores de lixo.
          Identificar os horários de entrada e saída de empresas e instituições de ensino 
          da localidade e estimular a comunicação cortês principalmente durante os horários 
          de entradas e saída de alunos, uma vez que a educação e o respeito devem, não 
          apenas, ser ensinadas, sobretudo vivenciadas.
          Estimular a boa convivência entre todas as pessoas, independente de: raça, gênero,
          orientação sexual, fé ou crença, idade, etnia ou posição social. Afinal de contas,
          Respeito e Cortesia é bom e Todo Mundo gosta.  
        </S.ModalP>
        <S.ModalButton onClick={handleComunicationModal}>x</S.ModalButton>
      </Modal>
      <Modal
        isOpen={silenceLawModal}
        onRequestClose={handleSilenceLawModal}
        style={customModalStyles}
      >
        <S.ModalTitle>Lei do Silêncio</S.ModalTitle>
        <S.ModalP>De mãos dadas com a cortesia, vem o respeito a Lei do Silêncio. Antes de 
          tudo é preciso deixar claro que essa é uma Lei real e que varia de acordo com o 
          estado brasileiro, no Rio de Janeiro (RJ), em todo seu território ela é válida 
          das 20h até às 07h, onde o limite (máximo em decibel "dB") é de: até o maximo de 
          50 dB, fora desse horário, o limite tolerável é de 55 dB e em zonas industriais 
          os limites variam entre 70 db fora do horário e 60 dB dentro do período. Caso o 
          dia seguinte seja domingo ou feriado, a faixa de horario se extende até as 09:00
          (NBR-Norma Brasileira 10.151/2000 desenvolvida pela ABNT - Associação Brasileira 
          de Normas Técnicas).
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
            <S.Image src={Seguranca} alt="Logo Segurança" />
          </S.Li>
          <S.Li onClick={handleGreenEnergyModal}>
            <S.Image src={Iluminacao} alt="Logo Iluminação" />
          </S.Li>
          <S.Li onClick={handlePublicTransportModal}>
            <S.Image src={TransportePublico} alt="Logo Transporte" />
          </S.Li>
          <S.Li onClick={handleComunicationModal}>
            <S.Image src={CortesiaRespeito} alt="Logo Diálogo" />
          </S.Li>
          <S.Li onClick={handleSilenceLawModal}>
            <S.Image src={RespeitoSilencio} alt="Logo Relógio" />
          </S.Li>
        </S.Ul>
      </S.Main>
    </>
  );
}
