import { createGlobalStyle } from "styled-components"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway/Raleway-Regular.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Raleway-Light';
    src: url('/fonts/Raleway/Raleway-Light.ttf'), url('/fonts/Raleway/Raleway-LightItalic.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Raleway-Medium';
    src: url('/fonts/Raleway/Raleway-Medium.ttf'), url('/fonts/Raleway/Raleway-MediumItalic.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Raleway-Bold';
    src: url('/fonts/Raleway/Raleway-Bold.ttf'), url('/fonts/Raleway/Raleway-BoldItalic.ttf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }

  * { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
  }
`