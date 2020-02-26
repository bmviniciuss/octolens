import 'styled-components'

import { MyClassTheme } from '../styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends MyClassTheme {
    // Need to pass a dummy property to work
    _?: string
  }
}
