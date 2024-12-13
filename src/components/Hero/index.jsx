import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import styles from './styles.module.css'
import { ComputersCanvas } from '..'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import SectionWrapper from '../../hoc'

const Hero = () => {

    const [isMobile, setIsMobile] = useState(false)
    const [removeObject, setRemoveObject] = useState(false)
    // const []

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1350px)")
        const secondMediaQuery = window.matchMedia("(max-width: 500px)")
        const heroPageQuery = window.matchMedia("(max-width: 1350px)")

        setIsMobile(mediaQuery.matches)
        setRemoveObject(secondMediaQuery.matches)

        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches)
        }

        const handleSecondMediaQueryChange = (e) => {
            setRemoveObject(e.matches)
        }

        mediaQuery.addEventListener("change", handleMediaQueryChange)
        secondMediaQuery.addEventListener("change", handleSecondMediaQueryChange)

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange)
            secondMediaQuery.removeEventListener("change", handleSecondMediaQueryChange)
        }

    }, [])

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={clsx(styles.main, isMobile ? styles.mobileLayout : "")}>
                <div className={styles.left}>
                    <div className={styles.title}>Ideate. Explore. Design.</div>
                    <div className={styles.intro}>
                        <h1>Hi, I'm <span style={{ color: "#d6a7f5" }}>Emmanuella Aliu</span></h1>
                        <h4>Graphic Designer. 3D Animator. Artist. Editor.</h4>
                        <p>I am a skilled Graphic / 3D designer with a passion for creating beautiful, clean, and intuitive designs.</p>
                    </div>
                    <div className={styles.buttonSection}>
                        <a href="#contact">
                            <button className={styles.button}>Hire Me</button>
                        </a>
                    </div>
                </div>

                {/* <div className={styles.right}> */}
                {<ComputersCanvas removeObject={removeObject} isMobile={isMobile} />}
                {/* </div> */}

                <span className={styles.bgPicHover}>
                </span>

                {!removeObject && <div className={styles.scrollTool}>
                    <a href="#about">
                        <div style={{
                            display: "flex",
                            width: "35px",
                            height: "64px",
                            borderRadius: "50px",
                            border: "4px grey solid",
                            justifyContent: "center",
                            alignItems: "start",
                            padding: "5px",
                            marginTop: isMobile ? "20px" : "0px",
                        }}>
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
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
                    </a>
                </div>}
            </div>
        </div>
    )
}

export default SectionWrapper(Hero, "hero")