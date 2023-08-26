import { color } from './tokens'

// '#fcf5f0', //  1 | -12
// https://uicolors.app/create
const tuscany_palette = [
  color.silk, // 0 | -13
  '#f9e8db', //  1 | -11
  '#f1ceb7', //  2 | -10
  '#e8ae89', //  3 | -9
  '#de8459', //  4 | -8
  '#d66539', //  5 | -7
  '#c94f2e', //  6 | -6 Primary
  '#a63d28', //  7 | -5
  '#853227', //  8 | -4
  '#6c2b22', //  9 | -3
  '#3a1410', // 10 | -2
  color.mine_shaft, // 11 | -1
  color.black, // 12 | 0
]

export const palettes = {
  light: tuscany_palette,
  dark: [...tuscany_palette].reverse(),
}

// templates use the palette and specify index
// negative goes backwards from end so -1 is the last item
const template = {
  primary: 7, // tuscany

  background: 0, // silk
  backgroundPress: 3,
  color: -1, // mine shaft
  border: 3,
  placeholder: 5,

  shadow: -1,
}

export const templates = {
  base: template,
}
