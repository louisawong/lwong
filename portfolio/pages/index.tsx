import { AboutMe, Experience, GetInTouch, Hero, Projects, Social } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero/>
      <Social/>
      <div className={styles.bodyContainer}>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <GetInTouch/>
      </div>
    </div>
  )
}
