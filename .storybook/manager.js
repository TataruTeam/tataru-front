import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import logo from './public/Logo-Color.png';

const theme = create({
    base: 'light',
    brandImage: logo,
});
 
addons.setConfig({
  theme,
});