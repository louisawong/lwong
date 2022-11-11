import styles from '../../styles/Projects.module.css'
import { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from 'styled-components'
import { Project } from './Project'


export function Projects() {
  const themeContext = useContext(ThemeContext)
  return (
    <div className={styles.container}>
      <h2 className={'thick accent'}>PROJECTS</h2>
      <div className={styles.projectSection}>
        <Project 
          title={'PLANTIFUL'}
          description={'A responsive web application designed for the plant loving community. Users are able to discover and connect with nearby users by their geo-spatial data to sell or trade their plant collection. Users are also able to post their plant inspirations globally to show off their terrarium or green space.'} 
          techStack={['React','Next.Js', 'Next.Js API', 'Redux', 'MongoDB', 'Mongoose', 'Firebase Authentication', 'SASS']}
          images={
            <>
              <Image className={styles.plantifulLogin} alt="Plantiful Login Module" src={"/images/pLogin.png"}/>
              <Image className={styles.plantifulPost} alt="Plantiful Post Module" src={"/images/ppost.png"}/>
            </>
          }
          />
        <Project
          title={'FITOME'}
          description={'A PWA management tool for personal trainers to connect remotely with their clients, inspired by the social distancing necessitated by the pandemic. Within the app, personal trainers are able to assign multiple workout regimens and individual exercises to their clients. They can invite clients via invitation codes sent through text messages. With social distancing, it is still important to have face to face time which clients. Trainers can schedule video calls for workouts and checkups that comes with a built in timer overlay. Clients are able to view workouts and join their scheduled video calls on their desktop or mobile devices.'}
          techStack={['Peer2Peer', 'Socket.io', 'Google WorkBox', 'Express', 'PostgreSQL', 'Sequelize', 'Redux', 'Next.JS', 'Firebase Authentication']}
          images={
            <>
              <Image className={styles.fitomeLogin} alt="Fitome Login Module" src={"/images/fLogin.png"}/>
              <Image className={styles.fitomeWorkout} alt="Fitome Workout Screen" src={"/images/fWorkout.png"}/>
            </>
          }
          />
        </div>
    </div>
  )
}
