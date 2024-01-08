import React, { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

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

export default PictureOrVideo;