import Image from 'next/image'
import { useState } from 'react'
import { MdKeyboardArrowDown} from 'react-icons/md'

import styles from '../styles/Experience.module.css'


const projects = ['One-click Tenant Application', 'US Recurrent & One-time Payment (Stripe)', 'Signing Relevant Documents (DocuSign)', 'SMS Notification (Twilio)', 'Website Redesign', 'Booking Timer Countdown', 'Bulk Listing Update', 'Fractional Ownership Feature', 'Roommate Matching', 'Payout OnBoarding Flow']
const techs = ['AWS (Lambda, EventBridge, S3, SQS, Rekognition)', 'MySQL', 'Sequelize', 'MongoDB', 'Mongoose', 'React', 'TypeScript', 'Node.js']
const integrations = ['Stripe', 'PaySafe', 'Twilio', 'TransferWise', 'DocuSign', 'Certn', 'Slack']


export function Experience() {
 const [isOpenProjects, setIsOpenProjects] = useState(false)
 const [isOpenTech, setIsOpenTech] = useState(false)
 const [isOpenIntegrations, setIsOpenIntegrations] = useState(false)

 const handleProjects = () => setIsOpenProjects(!isOpenProjects)
 const handleTech = () => setIsOpenTech(!isOpenTech)
 const handleIntegrations = () => setIsOpenIntegrations(!isOpenIntegrations)

  return (
    <div className={styles.container}>
        <h2 className={'thick accent'}>EXPERIENCE</h2>
        <h2 className={'thick'}>{"GUIKER - INTERMEDIATE FULL STACK SOFTWARE DEVELOPER"}</h2>
        <p className={styles.italic}>August 2021 - Present</p>
        <br/>
        <p>Real estate web application that will revolutionize real estate investments for our generation.</p>
        <br/>
        <p>Guiker is a platform for all things real estate. From helping landlords and corporations find their perfect tenants, to managing their leases, and rent payments. Guiker is also an investment platform for those who want to get a piece of the pie in real estate through property fractional ownership. It allows people to own a piece of property by owning only a slice of it as an investment rather than buying a property fully. This opens the real estate market to the masses and it will no longer be an investment barrier.</p>
        <br/>
        <div className={styles.collapseTitle} onClick={handleProjects}>
            <h2>SELECT PROJECTS</h2>
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
        <div className={styles.collapseTitle} onClick={handleIntegrations}>
            <h2>INTEGRATIONS</h2>
            <MdKeyboardArrowDown className={styles[`arrow`+(isOpenIntegrations ? '-open' : '')]} />
        </div>
        {isOpenIntegrations && <ul>
            {integrations.map(tech => <li key={tech}>{tech}</li>)}
        </ul>}
       
        <div className={styles.imageContainer}>
            <Image className={styles.guikerHomepage} alt="Guiker Homepage" src={"/images/guiker.png"}/>
        </div>
    </div>
  )
}