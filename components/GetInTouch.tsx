import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { MdOutlineEmail} from 'react-icons/md'
import { FiLinkedin, FiGithub, FiGitlab } from 'react-icons/fi'

import styles from '../styles/GetInTouch.module.css'
import { SocialLink } from './SocialLink'

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
        </div>
        <div className={styles.socials}>
            <SocialLink link="https://gitlab.com/louisawong"  icon={<FiGitlab className={styles.icon}/>}/>
            <SocialLink link="https://github.com/louisawong" icon={ <FiGithub className={styles.icon}/>}/>
            <SocialLink link="https://www.linkedin.com/in/louisa-wy-wong/"   icon={ <FiLinkedin className={styles.icon}/>}/>
        </div>
      </div>
  )
}
