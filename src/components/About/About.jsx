import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="about-image" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/codingIcon.png")} alt="coding" />
                    <div className={styles.aboutItemText}>
                        <h3>Programmer</h3>
                        <p>I am an adept problem-solver and skilled programmer, with extensive knowledge and hands-on experience in languages such as C, Java and Python, as well as databases including MySQL and MongoDB.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Front-end Developer</h3>
                        <p>I am a growing frontend developer, continuously honing and upgrading my skills in developing attractive, user-friendly and responsive webpages using tools like HTML, CSS, JavaScript, React.js etc.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <a href='https://shutterspeed.godaddysites.com/'><img src={getImageUrl("about/photoIcon.png")} alt="photo" /></a>
                    <div className={styles.aboutItemText}>
                        <h3>Photography Enthusiast</h3>
                        <p>I am very passionate about photography, constantly looking to master creativity and artistic storytelling through my artwork behind the lens. Click the camera icon to visit my gallery and know more!</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <a href='https://drew0310.github.io/Image-Gallery/'><img src={getImageUrl("about/planeIcon.png")} alt="plane" /></a>
                    <div className={styles.aboutItemText}>
                        <h3>Aviation Geek</h3>
                        <p>I have immense interest in aviation and an unquenchable thirst for knowledge related to recent aviation trends. I always find bliss and sheer excitement everytime I board an aircraft and explore the endless skies, or grab my camera for planespotting. Click the plane icon to know more!</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
