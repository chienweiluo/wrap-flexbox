import text from './text'

export default {
  colors: {
    greys: {
      switch: '#C1C6CD',
      risk: '#EAECEF',
    },
    black: {
      header: '#12161C',
      footer: '#0B0E11',
      text: '#212833',
    },
    header: {
      text: 'white',
      bg: '#12161C',
      dropdown: '#1E2126',
      gray: '#848E9C',
      black: '#212833',
    },
  },
  fonts: {
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  breakpoints: ['767px', '1023px', '1279px'],
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    minor: 18,
    plus: 20,
    xp: 24,
    lg: 28,
    xl: 32,
    xxl: 40,
    xxxl: 48,
    xxxxl: 56,
  },
  fontWeights: {
    extraLight: 200,
    light: 300,
    normal: 400,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: {
    line: 1,
    tiny: 2,
    minor: 4,
    xxs: 6,
    xs: 8,
    s: 10,
    ls: 12,
    sm: 16,
    md: 24,
    plus: 32,
    xp: 40,
    lg: 48,
    xl: 64,
    xxl: 80,
  },
  sizes: {
    avatar: 48,
  },
  radii: {
    small: 2,
    large: 6,
    xlarge: 16,
  },
  shadows: {
    tooltip: ' 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)', // 2
    dialog: '0px 8px 16px rgba(20,21,26,0.16), 0px 16px 32px rgba(71,77,87,0.16), 0px 0px 1px rgba(20,21,26,0.1)', // 3
    dropdown: '0px 8px 16px rgba(24, 26, 32, 0.16)',
  },
  zIndices: {
    mask: 10,
    dropdown: 1100,
    modal: 1200,
    backTop: 1225,
    notification: 1300,
    alert: 1350,
    tooltip: 1400,
    drawer: 9999,
  },
  styles: {
    root: {
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
  ...text,
}
