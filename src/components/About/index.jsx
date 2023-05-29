import React from 'react'
import styles from './styles.module.css'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { services } from '../../constants'
import { fadeIn, textVariant } from "../../utils/motion"
import SectionWrapper from '../../hoc'

const About = () => {
    return (
        <div className={styles.container} id="about">
            <motion.div variants={textVariant()}>
                <p className={styles.subText}>Introduction</p>
                <h2 className={styles.title}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className={styles.description}
            >
                I am a skilled Graphic / 3D designer with a passion for creating beautiful, clean, and intuitive designs. I have a strong eye for visual composition and a deep understanding of the principles of design. I have expertise in Adobe Photoshop, Illustrator, After Effects, and Premier Pro. I am also skilled in 3D modeling and animation using Blender.
                I am a highly motivated individual seeking to contribute my skills to your company and grow my experience in the field of graphic design.
            </motion.p>

            <div className={styles.cardContainer}>
                {services.map((service, index) => (
                    <RoleCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>

    )
}

const RoleCard = ({ index, title, icon }) => {
    return (
        <Tilt className={styles.card}>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                style={{
                    width: "100%",
                    padding: "2px",
                    borderRadius: "20px",
                    boxShadow: "0px 35px 120px -15px #211e35",
                    background: "#360033",
                    background: "-webkit-linear-gradient(to right, #fbd3e9, #bb377d)",
                    background: "linear-gradient(to right, #fbd3e9, #bb377d)",
                }}
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className={styles.cardContent}
                >
                    <img src={icon} alt="title" className={styles.cardImage} />
                    <h3 className={styles.cardTitle}>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

export default SectionWrapper(About, "about")