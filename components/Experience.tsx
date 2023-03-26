import Image from 'next/image'
import { useState } from 'react'
import { MdKeyboardArrowDown} from 'react-icons/md'

import styles from '../styles/Experience.module.css'


const projects = ['One-click Tenant Application', 'US Recurrent & One-time Payment (Stripe)', 'Signing Relevant Documents (DocuSign)', 'SMS Notification (Twilio)', 'Website Redesign', 'Booking Timer Countdown', 'Bulk Listing Update']
const techs = ['AWS', 'MySQL', 'Sequelize', 'MongoDB', 'Mongoose', 'React', 'TypeScript']


export function Experience() {
 const [isOpenProjects, setIsOpenProjects] = useState(false)
 const [isOpenTech, setIsOpenTech] = useState(false)

 const handleProjects = () => setIsOpenProjects(!isOpenProjects)
 const handleTech = () => setIsOpenTech(!isOpenTech)

  return (
    <div className={styles.container}>
        <h2 className={'thick accent'}>EXPERIENCE</h2>
        <h2 className={'thick'}>{"GUIKER - FULL STACK SOFTWARE DEVELOPER"}</h2>
        <p className={styles.italic}>August 2021 - Present</p>
        <br/>
        <p>Real estate web application that helps landlords connect to great tenants. Making the renting process from finding a place to recurrent payments easy and seamless. </p>
        <div className={styles.collapseTitle} onClick={handleProjects}>
            <h2>PROJECTS</h2>
            <MdKeyboardArrowDown className={styles[`arrow`+(isOpenProjects ? '-open' : '')]} />
        </div>
        {isOpenProjects && <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>}
        <div className={styles.collapseTitle} onClick={handleTech}>
            <h2>TECHNOLOGY STACK</h2>
            <MdKeyboardArrowDown className={styles[`arrow`+(isOpenTech ? '-open' : '')]} />
        </div>
        {isOpenTech && <ul>
            {techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>}
       
        <div className={styles.imageContainer}>
            <Image className={styles.guikerHomepage} alt="Guiker Homepage" src={"/images/guiker.png"}/>
        </div>
    </div>
  )
}