import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFF",
      beige: "#fcf8f3",

      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      green500: "#00875f",
      green300: "#00b37e",

      purple900: "#4A1B8C",
      purple500: "#7F1FBF",
      purple300: "#870DD9",

      pink700: "#894a70",
      pink500: "#e381bc",
      pink100: "#ccb7c5"

    },
  },
});
