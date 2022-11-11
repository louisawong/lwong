import styles from '../../styles/Projects.module.css'
import React, { ReactNode, useContext } from 'react'
import { Open_Sans } from '@next/font/google'


const openSans = Open_Sans({weight: '600'})

export function Project({title, techStack, images, description }:{title: string; techStack: string[]; images: ReactNode; description:string}) {
  return (
    <div>
    <h2 className={`${openSans.className} ${styles.projectTitle}`}>{title}</h2>
      <div className={styles.project}>
        <div className={styles.projectLeft}>
            {images}
        </div>
        <div className={styles.projectRight}>
          <p>{description}</p>
          <h2>TECHNOLOGY STACK</h2>
          <ul>
            {
                techStack.map(tech => <li key={tech}>{tech}</li>)
            }
          </ul>
        </div>
    </div>
    </div>
  )
}
