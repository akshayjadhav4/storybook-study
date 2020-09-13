import React from "react";
import { withConsole } from "@storybook/addon-console";
// V5
// import { addDecorator } from "@storybook/react";

import { ThemeProvider, CSSReset, theme, Box } from "@chakra-ui/core";

// addDecorator((story) => (
//   <ThemeProvider theme={theme}>
//     <CSSReset />
//     <Box m="5">{story()}</Box>
//   </ThemeProvider>
// ));

// V6
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="5">
        <Story />
      </Box>
    </ThemeProvider>
  ),
  (storyFn, context) => withConsole()(storyFn)(context),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
