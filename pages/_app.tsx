
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'

import { ResumeButton } from '../components'
import { lightTheme, darkTheme, GlobalStyles, openSans } from '../utils'
import '../styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  const darkmode = useDarkMode(false)
  const theme = darkmode.value ? darkTheme : lightTheme

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <main className={openSans.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {isMounted && (
            <>
            <div className='appBar'>
              <ResumeButton />
              <input type='checkbox' checked={!darkmode.value} className={'toggle'} onClick={darkmode.toggle}/>
            </div>
            <Component {...pageProps} />
            </>
        )}
        </ThemeProvider>
    </main>
  )
}
