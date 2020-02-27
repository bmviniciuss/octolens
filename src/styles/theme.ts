type themeType = {
  colors: {
    [key: string]: {
      [key: string]: string
    }
  }
  shadows: {
    [key: string]: string
  }
}

const theme: themeType = {
  colors: {
    gray: {
      2: 'hsl(200, 5%, 2%)',
      12: 'hsl(200, 5%, 12%)',
      22: 'hsl(200, 5%, 22%)',
      32: 'hsl(200, 5%, 32%)',
      42: 'hsl(200, 5%, 42%)',
      62: 'hsl(200, 5%, 62%)'
    },
    blue: {
      10: 'hsl(207,100%, 10%)',
      21: 'hsl(207,100%, 21%)',
      31: 'hsl(207,100%, 31%)',
      41: 'hsl(207,100%, 41%)',
      51: 'hsl(207,100%, 51%)',
      97: 'hsl(207,100%, 97%)'
    }
  },
  shadows: {
    1: '0 1px 3px hsla(0, 0%, 0%, 0.2)',
    2: '0 4px 6px hsla(0, 0%, 0%, 0.2)',
    3: '0 5px 15px hsla(0, 0%, 0%, 0.2)',
    4: '0 10px 24px hsla(0, 0%, 0%, 0.2)',
    5: '0 15px 35px hsla(0, 0%, 0%, 0.2)'
  }
}

export class MyClassTheme {
  colors = theme.colors
  shadows = theme.shadows
}

export default theme
