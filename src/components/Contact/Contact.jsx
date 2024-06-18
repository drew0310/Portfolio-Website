import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach me out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:raravind0310@gmail.com">raravind0310@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/aravind-ramachandran-1a7b2a273/">linkedin.com/in/aravind-ramachandran-1a7b2a273</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                <a href="https://github.com/drew0310">github.com/drew0310</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/instagramIcon.png")} alt="Instagram icon" />
                <a href="https://www.instagram.com/_andrew0310/">instagram.com/_andrew0310</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
