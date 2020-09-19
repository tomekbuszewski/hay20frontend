import { rem } from "@ui/helpers";

export const theme = {
  colors: {
    shadow: "#000",
    counter: "#F6F6F8",
    background: "#2E3338",
    toggler: "#252628",
    albumBackground: "#121416",
    textPrimary: "#D3D0CB",
    textSecondary: "#B4AFA7",
    accentDark: "#C83E4D",
    accentLight: "#197278",
    spotify: "#00D95A",
    rym: "#2067B4",
    qobuz: "#000",
  },
  consts: {
    borderRadius: rem(8),
    cover: rem(80),
    icon: rem(24),
  },
  margins: {
    small: rem(8),
    horizontal: rem(16),
    vertical: rem(12),
    spacious: rem(32),
  },
  animations: {
    durations: {
      short: "150ms",
      medium: "300ms",
      long: "500ms",
      veryLong: "750ms",
    },
    easings: {
      easeInOut: "ease-in-out",
      bezier: "cubic-bezier(.93,-0.43,.1,1.45)",
    },
  },
  font: {
    sizes: {
      small: rem(12),
      large: rem(16),
      humongous: rem(48),
    },
    faces: {
      primary: "'Poppins', sans-serif;",
      secondary: "'Inter', sans-serif",
    },
  },
};

export type ITheme = keyof typeof theme;
