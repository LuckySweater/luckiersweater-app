const shades = {
  shade50: 0,
  shade100: 1,
  shade200: 2,
  shade300: 3,
  shade400: 4,
  shade500: 5,
  shade600: 6,
  shade700: 7,
  shade800: 8,
  shade900: 9,
  shade950: 10,
}

// templates use the palette and specify index
// negative goes backwards from end so -1 is the last item
const template = {
  ...shades,
  background: 0,
  backgroundHover: 3,
  backgroundPress: 4,
  backgroundFocus: 5,
  backgroundStrong: 0,
  backgroundTransparent: 0,
  color: -1,
  colorHover: -2,
  colorPress: -1,
  colorFocus: -2,
  colorTransparent: -0,
  borderColor: 5,
  borderColorHover: 6,
  borderColorFocus: 4,
  borderColorPress: 5,
  placeholderColor: -4,

  shadowColor: 0,
  shadowColorFocus: 0,
  shadowColorHover: 0,
  shadowColorPress: 0,
}

const templates = {
  base: template,
}

export default templates
