import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { MdOutlineEmail} from 'react-icons/md'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

import styles from '../styles/GetInTouch.module.css'

export function GetInTouch() {
  const themeContext = useContext(ThemeContext)
  return (
      <div className={styles.container}>
        <h1 className={'monoton'}>Get In Touch</h1>
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
