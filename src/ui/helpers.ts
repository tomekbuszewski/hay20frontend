import { theme } from "@ui/theme";

export const BASE_SIZE = 8;
export const rem = (input: number, base: number = BASE_SIZE): string =>
  `${input / base}rem`;

interface StyledComponentsProps {
  theme: Record<keyof typeof theme, any>;
}

export const transition = (
  props: string[] | string,
  duration?: keyof typeof theme.animations.durations,
  easing?: keyof typeof theme.animations.easings,
): any => {
  return ({ theme }: StyledComponentsProps) => {
    const properties = Array.isArray(props) ? props : [props];
    const animationDuration = theme.animations.durations[duration || "medium"];
    const animationEasing = theme.animations.easings[easing || "easeInOut"];

    return properties
      .map((item) => `${item} ${animationDuration} ${animationEasing}`)
      .join(", ");
  };
};

const getProp = (obj: any, input: string): any => {
  return input.split(".").reduce((acc, curr) => {
    return acc ? acc[curr] : undefined;
  }, obj || null);
};

const getter = <T>(key: T, path: any) => {
  return ({ theme }: StyledComponentsProps) => {
    return getProp(theme, path)[key as T];
  };
};

export const colorGetter = (key: keyof typeof theme.colors) =>
  getter<keyof typeof theme.colors>(key, "colors");
export const marginGetter = (key: keyof typeof theme.margins) =>
  getter<keyof typeof theme.margins>(key, "margins");
export const fontSizeGetter = (key: keyof typeof theme.font.sizes) =>
  getter<keyof typeof theme.font.sizes>(key, "font.sizes");
export const fontFaceGetter = (key: keyof typeof theme.font.faces) =>
  getter<keyof typeof theme.font.faces>(key, "font.faces");
export const constsGetter = (key: keyof typeof theme.consts) =>
  getter<keyof typeof theme.consts>(key, "consts");
