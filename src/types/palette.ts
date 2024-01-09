
type colorCode = string

interface Gradients {
  primaryGradient: colorCode
  grayGradient: colorCode
}

export interface PaletteInterface extends Gradients {
  modalBg: colorCode
  popupBg: colorCode
  inputBg?: colorCode
  bg1: colorCode
  bg2: colorCode
  bg3: colorCode
  bg4: colorCode
  bg5: colorCode
  bg6: colorCode
  line: colorCode
  vessel?: colorCode
  liteBg1: colorCode
  liteBg2: colorCode
  t: {
    primary: colorCode
    secondary: colorCode
    third: colorCode
    placeholder: colorCode
    disabled: colorCode
    yellow: colorCode
    sell: colorCode
    buy: colorCode
    toast: colorCode
    white: colorCode
  }
  iconNormal: colorCode
  alertYellowBg: colorCode
  badgeYellowBg: colorCode
  outlineHover: colorCode
  primaryHover: colorCode
  primary: colorCode
  toastFailBg: colorCode
  depthSellBg: colorCode
  sellHover: colorCode
  sell: colorCode
  toastSuccessBg: colorCode
  depthBuyBg: colorCode
  buyHover: colorCode
  buy: colorCode
  invBg: colorCode
  success: colorCode
  successBg: colorCode
  error: colorCode
  errorBg: colorCode
  disableBg: colorCode
}
