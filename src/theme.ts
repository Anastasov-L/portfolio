import { defaultConfig, createSystem, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    breakpoints: {
      base: "0em",
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "68.75em", // ← 1250px
      ll: "96em",
      "2xl": "96em",
    },
  },
});

export const system = createSystem(defaultConfig, config);

