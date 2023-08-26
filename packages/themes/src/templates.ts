import { color } from './tokens'

// https://uicolors.app/create
const tuscany_palette = [
  color.silk, // 0
  '#fcf5f0', // 1
  '#f9e8db', // 2
  '#f1ceb7', // 3
  '#e8ae89', // 4
  '#de8459', // 5
  '#d66539', // 6
  '#c94f2e', // 7 - Primary
  '#a63d28', // 8
  '#853227', // 9
  '#6c2b22', // 10
  '#3a1410', // 11
  color.mine_shaft, // 12
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
  border: -1,
  placeholder: 5,

  shadow: -1,
}

export const templates = {
  base: template,
}
