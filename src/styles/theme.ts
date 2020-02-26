const theme = {
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
      51: 'hsl(207,100%, 51%)'
    }
  }
}

export class MyClassTheme {
  colors = theme.colors
}

export default theme
