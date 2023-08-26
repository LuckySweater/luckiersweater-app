// https://uicolors.app/create
const palettes = (() => {
  const primary_palette = [
    '#FCFAF7', // 0
    '#fcf5f0', // 0
    '#f9e8db', // 1
    '#f1ceb7', // 2
    '#e8ae89', // 3
    '#de8459', // 4
    '#d66539', // 5
    '#c94f2e', // 6 - Primary
    '#a63d28', // 7
    '#853227', // 8
    '#6c2b22', // 9
    '#3a1410', // 10
    '#28120b', // 11
  ]

  return {
    light: primary_palette,
    dark: [...primary_palette].reverse(),
  }
})()

export default palettes
