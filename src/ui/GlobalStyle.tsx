import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";
import { BASE_SIZE } from "@ui/helpers";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${BASE_SIZE}px;
    scroll-behavior: smooth;
  }
  
  ${reboot}
`;
