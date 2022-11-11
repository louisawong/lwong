import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { MdOutlineEmail} from 'react-icons/md'

import styles from '../styles/Social.module.css'


export function Social() {
  return (
      <div className={styles.container}>
        <a href = "mailto: louisawywong@gmail.com?subject=Let's%20Connect!">
            <MdOutlineEmail className={styles.icon}/>
        </a>
        <a href="https://github.com/louisawong" target="_blank" rel="noreferrer">
            <FiGithub className={styles.icon}/>
        </a>
        <a href="https://www.linkedin.com/in/louisa-wy-wong/" target="_blank" rel="noreferrer">
            <FiLinkedin className={styles.icon}/>
        </a>
        <div className={styles.line}/>
      </div>
  )
}