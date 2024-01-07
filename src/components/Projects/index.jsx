import React, { useState } from 'react'
import styles from './styles.module.css'
import { projects } from '../../assets'
import SectionWrapper from '../../hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../../utils/motion"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import clsx from "clsx";

const Projects = () => {
    return (
        <div className={styles.container} id="portfolio">
            <motion.div variants={textVariant()}>
                <p className={styles.subText}>Portfolio</p>
                <h2 className={styles.title}>My Work.</h2>
            </motion.div>

            <div className={styles.mainSection}>
                {projects.map((each) => (
                    // const {project, title, type, textDesc} = each
                    <Card title={each.title} media={{ src: each.project, type: each.type }} textDesc={each.textDesc} />
                ))}
            </div>
        </div>
    )
}

const Card = ({ title, media, textDesc }) => {
    return (
        <div className={styles.card}>
            {media.type !== "multiple" &&
                <div className={styles.cardImg}>
                    <PictureOrVideo src={media.src} mediaType={media.type} />
                </div>}
            {media.type === "multiple" &&
                <div className={styles.cardImg}>
                    {media.src.map((each) => (<PictureOrVideo src={each} mediaType={media.type} />))}
                </div>}

            <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardText}>{textDesc}</p>
            </div>
        </div>
    )
}

const PictureOrVideo = ({ src, mediaType }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    return (
        mediaType === "video" ?
            <div className={styles.mediaBox}>
                <video controls width="250px" height="250px">
                    <source src={src} type="video/mp4" />

                    Sorry, your browser doesn't support videos.
                </video >
            </div>
            :
            <div
                className={isFullScreen ? styles.fullscreenDiv : clsx(styles.mediaBox)}
            >
                <div
                    className={isFullScreen ? styles.fullscreenDiv : styles.multipleMediaDiv}
                    onClick={() => setIsFullScreen(!isFullScreen)}
                >
                    <img
                        src={src}
                        alt=""
                        width="100%"
                        className={isFullScreen ? styles.fullScreen : ""}
                    />
                </div>
            </div>
    )
}

export default SectionWrapper(Projects, "projects")