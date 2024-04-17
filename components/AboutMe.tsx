import styles from '../styles/Experience.module.css'

export function AboutMe() {

  return (
    <div className={styles.container}>
        <h2 className={'thick accent'}>ABOUT ME</h2>
        <h2 className={'thick'}>{"Hello! I'm Louisa."}</h2>
        <br/>
        <p>{"I am a full stack developer with a user-driven mindset."}</p>
        <br/>
        <p>{"My passion for programming started in 2012 when I first discovered Java and created a simple autonomous driving robot that learns how to navigate and shoots on its own for a school competition. Ever since then, I loved learning new technologies and turning cool ideas into reality."}</p>
        <br/>
        <p>{"As I have studied and previously worked in Marketing for several years, I have a solid understanding on how to better interpret market research data and to understand user journies and engagement. My experiences have helped me plan and develop applications with a user-focused mindset. I enjoy writing code that solves real-life problems by merging functionality, design and creativity together. I have always loved a good challenge and problem solving as it’s all about looking at a situation from different perspectives and breaking it down into bite size pieces."}</p>
        <br/>
        <p>{"I have designed and built robust applications that are intuitive to navigate and engaging to users. I believe in providing value continously and deploying often by delivering well tested, quality code."}</p>
        <br/>
        <p>{"When I’m not coding, you can either find me in a coffee shop or in my craft room getting my hands on my next project. Let’s grab a coffee and discuss ideas!"}</p>
    </div>
  )
}