import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import styles from '../styles/Social.module.css'
import { FiDownload, FiLinkedin } from 'react-icons/fi'


export function ResumeButton() {
    const themeContext = useContext(ThemeContext)
  return (
    <a href="./files/LouisaWong2024.pdf" download className="hamburger_choices_option">
        <div className={styles[`button-${themeContext.background === '#283618' ? 'dark' : 'light'}`]}>
            <FiDownload/>
            <p className={styles.buttonCTA}>Resume</p>
        </div>
    </a>
  )
}