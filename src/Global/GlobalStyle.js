import { createGlobalStyle } from "styled-components";

// Images
import Background from "../assets/images/backgroundMatrix.jpg";

// Fonts
import SpaceAge from "../assets/fonts/SpaceAge.ttf";
import TechfontItalic from "../assets/fonts/Techfont-Italic.ttf";
import Techfont from "../assets/fonts/Techfont.ttf";
import Technoboard from "../assets/fonts/TechnoBoardRegular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SpaceAge';
    src: url(${SpaceAge});
  }
  @font-face {
    font-family: 'TechfontItalic';
    src: url(${TechfontItalic});
  }
  @font-face {
    font-family: 'Techfont';
    src: url(${Techfont});
  }
  @font-face {
    font-family: 'TechnoBoard';
    src: url(${Technoboard});
  }

  *{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
  }
  h1{
    font-family: 'SpaceAge';
    color:#74ee15;
    font-size:90px;
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  h2, h3, h4, li{
    font-family: 'TechnoBoard';
    color:#74ee15;
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  p{
    font-family: 'Techfont';
    color:#74ee15;
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  body{
    width:100%;
    min-height:100vh;
    background-image: url(${Background});
    background-size:cover;
    background-position:center;
    overflow: auto;
  
    ::-webkit-scrollbar{
      display:none;
    }
  }
  main {
    width: 100%;
     /* full screen less header and footer height */
    min-height: calc(100vh - 195px);
    background: rgba(11, 1, 1, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);  
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
  }
`;
