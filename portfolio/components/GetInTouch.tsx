import styles from '../styles/GetInTouch.module.css'
import { useContext } from 'react'
import { Monoton} from '@next/font/google'
import { ThemeContext } from 'styled-components'
import { MdOutlineEmail} from 'react-icons/md'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { ResumeButton } from './ResumeButton'

const monoton = Monoton({weight: '400'})

export function GetInTouch() {
  const themeContext = useContext(ThemeContext)
  return (
      <div className={styles.container}>
        <h1 className={monoton.className}>Get In Touch</h1>
        <div className={styles.socials}>
            <a href = "mailto: louisawywong@gmail.com?subject=Let's%20Get%20In%20Touch!">
                <MdOutlineEmail className={styles.icon}/>
                <p className='accent'>louisawywong@gmail.com</p>
            </a>
            <a href="https://github.com/louisawong" target="_blank" rel="noreferrer" >
                <FiGithub className={styles.icon}/>
            </a>
            <a href="https://www.linkedin.com/in/louisa-wy-wong/" target="_blank" rel="noreferrer">
                <FiLinkedin className={styles.icon}/>
            </a>
        </div>
      </div>
  )
}
