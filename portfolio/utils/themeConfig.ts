import { createGlobalStyle} from 'styled-components'

interface Theme {
 text: string
 background: string
}

export const lightTheme: Theme = {
  text: '#283618',
  background: '#fefdf3',
}

export const darkTheme: Theme = {
  text: '#fefdf3',
  background: '#283618',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}:{ theme: Theme }) => theme.background};
    color: ${({theme}:{ theme: Theme }) => theme.text};
  }
`