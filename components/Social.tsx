import { FiLinkedin, FiGithub, FiGitlab } from 'react-icons/fi'
import { MdOutlineEmail} from 'react-icons/md'

import styles from '../styles/Social.module.css'
import { SocialLink } from './SocialLink'

export function Social() {
  return (
      <div className={styles.container}>
        <a href="mailto: louisawywong@gmail.com?subject=Let's%20Connect!">
            <MdOutlineEmail className={styles.icon}/>
        </a>
        <SocialLink link="https://gitlab.com/louisawong"  icon={<FiGitlab className={styles.icon}/>}/>
        <SocialLink link="https://github.com/louisawong" icon={<FiGithub className={styles.icon}/>}/>
        <SocialLink link="https://www.linkedin.com/in/louisa-wy-wong/" icon={<FiLinkedin className={styles.icon}/>}/>
        <div className={styles.line}/>
      </div>
  )
}