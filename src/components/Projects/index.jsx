import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { projects } from '../../assets'
import SectionWrapper from '../../hoc'
import { motion } from 'framer-motion'
import { textVariant } from "../../utils/motion"
import Card from './Card'

const Projects = () => {

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
        <div className={styles.container} id="portfolio">
            <motion.div variants={textVariant()}>
                <p className={styles.subText}>Portfolio</p>
                <h2 className={styles.title}>My Work.</h2>
            </motion.div>

            <div className={styles.mainSection}>
                {projects.map((each, idx) => (
                    <Card
                        title={each.title}
                        media={{ src: each.project, type: each.type }}
                        textDesc={each.textDesc}
                        index={idx}
                        isMobile={isMobile}
                    />
                ))}
            </div>

            {isMobile &&
                <div
                    className={styles.mobileScrollTool}
                    style={{
                        display: "flex",
                        width: "64px",
                        height: "35px",
                        borderRadius: "50px",
                        border: "4px grey solid",
                        justifyContent: "center",
                        padding: "5px",
                        marginTop: "20px",
                        alignItems: "center",
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

export default SectionWrapper(Projects, "projects")