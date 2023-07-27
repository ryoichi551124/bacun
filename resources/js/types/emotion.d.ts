import '@emotion/react'

declare module '@emotion/react' {
  interface Theme {
    colors: Colors
    fontSize: FontSize
  }
}

interface Colors {
  font: string
}

interface FontSize {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}
