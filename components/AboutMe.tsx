import styles from '../styles/Experience.module.css'
import { openSans600 } from '../utils'

export function AboutMe() {

  return (
    <div className={styles.container}>
        <h2 className={`${openSans600.className} accent`}>ABOUT ME</h2>
        <h2 className={`${openSans600.className}`}>{"Hello! I'm Louisa."}</h2>
        <p>{"I am a full stack developer based near Toronto, ON"}</p>
        <br/>
        <p>{"My passion for programming started in 2012 when I first discovered Java and created a simple autonomous driving robot that learns how to navigate and shoots on its own for a school competition. Now, I'm a full stack engineer that loves to turn ideas into beautiful online spaces for desktop and mobile."}</p>
        <br/>
        <p>{"As I studied and previously worked in Marketing for 3 years, I love great user experience and brand design. My experience helps me plan and develop applications with a user-driven mindset. I enjoy writing code that solves real-life problem by merging functionality and creativity together. I have always loved a good challenge and problem solving as it’s all about looking at a situation from different perspectives and breaking it down into bite size pieces."}</p>
        <br/>
        <p>{"When I’m not coding, you can either find me in a coffee shop or in my craft room getting my hands on my next project. Let’s grab a coffee and discuss ideas!"}</p>
    </div>
  )
}