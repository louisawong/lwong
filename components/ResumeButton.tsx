import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import styles from '../styles/Social.module.css'


export function ResumeButton() {
    const themeContext = useContext(ThemeContext)
  return (
    <a href="./files/Louisa-Wong-2024.pdf" download className="hamburger_choices_option">
        <div className={styles[`button-${themeContext.background === '#283618' ? 'dark' : 'light'}`]}>
          <p className={styles.buttonCTA}>Resume</p>
        </div>
    </a>
  )
}