import { motion } from 'framer-motion'
import { fadeIn } from "../../utils/motion"
import styles from './styles.module.css'
import PictureOrVideo from './PictureOrVideo'
import { Tilt } from 'react-tilt'


const Card = ({ title, media, textDesc, index, isMobile }) => {
    return (
        <>
            {!isMobile ?
                <Tilt>
                    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
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
                    </motion.div>
                </Tilt> :
                <motion.div variants={fadeIn("right", "spring", 0.6 * index, 0.5)}>
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
                </motion.div>
            }
        </>
    )
}

export default Card