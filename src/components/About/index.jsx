import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { services } from '../../constants'
import { fadeIn, textVariant } from "../../utils/motion"
import SectionWrapper from '../../hoc'

const About = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 450px)")

        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches)
        }

        mediaQuery.addEventListener("change", handleMediaQueryChange)

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange)
        }

    }, [])

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
                    <RoleCard key={service.title} index={index} isMobile={isMobile} {...service} />
                ))}
            </div>

            {isMobile &&
                <div
                    // className={styles.mobileScrollTool}
                    style={{
                        display: "flex",
                        width: "64px",
                        height: "25px",
                        borderRadius: "50px",
                        border: "4px grey solid",
                        justifyContent: "center",
                        padding: "5px",
                        marginTop: "10px",
                        alignItems: "center",
                        position: "absolute",
                        left: "calc(50% - 27px)",
                    }}
                >
                    <motion.div
                        animate={{
                            x: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: "grey",
                        }}
                    />
                </div>
            }
        </div>

    )
}

const RoleCard = ({ index, title, isMobile, icon }) => {

    return (
        <>
            {!isMobile ?
                <Tilt className={styles.card}>
                    <motion.div
                        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                        style={{
                            width: "100%",
                            padding: "2px",
                            borderRadius: "20px",
                            boxShadow: "0px 35px 120px -15px #211e35",
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
                </Tilt> :
                <motion.div
                    variants={fadeIn("right", "spring", 0.5 * index, 0.3)}
                    style={{
                        width: "100%",
                        padding: "2px",
                        borderRadius: "20px",
                        // boxShadow: "0px 35px 120px -15px #211e35",
                        background: "linear-gradient(to right, #fbd3e9, #bb377d)",
                    }}
                >
                    <div
                        options={{ max: 45, scale: 1, speed: 100 }}
                        className={styles.cardContent}
                    >
                        <img src={icon} alt="title" className={styles.cardImage} />
                        <h3 className={styles.cardTitle}>{title}</h3>
                    </div>
                </motion.div>
            }
        </>
    )
}

export default SectionWrapper(About, "about")