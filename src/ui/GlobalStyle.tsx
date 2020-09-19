import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";
import { BASE_SIZE } from "@ui/helpers";

import { theme } from "@ui/theme";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${BASE_SIZE}px;
    scroll-behavior: smooth;
  }
  
  body {
    background: ${theme.colors.background};
  }
  
  ${reboot}
`;
