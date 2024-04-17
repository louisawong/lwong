import { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from 'styled-components'
import { BsArrowRight} from 'react-icons/bs'

import styles from '../styles/Hero.module.css'

export function Hero() {
  const themeContext = useContext(ThemeContext)
  const theme = themeContext.background === '#283618' ? 'dark' : 'light'

  return (
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
            <div className={styles.imageBanner}>
              <Image  className={styles.heroImage} alt='Louisa Wong in illustration' src={'/images/hero.png'}/>
              <div className={styles[`background-${theme}`]}/>
            </div>
            <a className={styles.circle} href = "mailto: louisawywong@gmail.com?subject=Let's%20Connect!">
              <div className={styles[`circleBackground-${theme}`]}/>
              <div className={styles[`circle-${theme}`]}>
                  <p className={styles.circleCTA}>LET'S TALK</p>
              </div>
            </a>
            <BsArrowRight className={styles.arrow}/>
        </div>
        <h1 className={'monoton'}>Louisa Wong</h1>
        <p className={styles.title}>FULL STACK SOFTWARE ENGINEER</p>
      </div>
  )
}
