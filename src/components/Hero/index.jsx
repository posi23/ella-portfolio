import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import styles from './styles.module.css'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { ComputersCanvas, Contact } from '..'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const Hero = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1050px)")
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
        <div className={styles.container}>
            <Navbar />
            <div className={clsx(styles.main, isMobile ? styles.mobileLayout : "")}>
                <div className={styles.left}>
                    <div className={styles.title}>Ideate. Explore. Design.</div>
                    <div className={styles.intro}>
                        <h1>Hi, I'm <span style={{ color: "#d6a7f5" }}>Emmanuella Aliu</span></h1>
                        <h4>Graphic / 3D Designer. Artist. Animator.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a deleniti cumque quisquam dolorem laboriosam maxime cupiditate omnis ea ad numquam, mollitia quis tenetur libero accusamus incidunt optio harum! Laborum.</p>
                    </div>
                    <div className={styles.buttonSection}>
                        <button className={styles.button}>Hire Me</button>
                    </div>
                </div>

                {/* <div className={styles.right}> */}
                <ComputersCanvas style={{ cursor: "pointer" }} isMobile={isMobile} />
                {/* </div> */}

                <span className={styles.bgPicHover}>
                </span>

                <div className={styles.scrollTool}>
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
                            <motion.dev
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
                </div>
            </div>

            {/* <div className={styles.socIcons}>
                <a href="https://linkedin.com">
                    <FaLinkedinIn className={styles.icon} />
                </a>

                <a href="https://linkedin.com">
                    <FaTwitter className={styles.icon} />
                </a>
            </div> */}
            {/* <Contact /> */}

        </div>
    )
}

export default Hero