import { themes } from '@storybook/theming';

import '../src/styles/globals.css';
import 'normalize.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark, previewBg: "white" }
  }
}