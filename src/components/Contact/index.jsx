import React, { useState } from 'react'
import styles from './styles.module.css'
import { FaLinkedinIn, FaPhone } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import SectionWrapper from '../../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../../utils/motion"

const Contact = () => {
    return (
        <div className={styles.container} id="contact">
            <motion.div variants={textVariant()}>
                <p className={styles.subText}>Contact Me</p>
                <h2 className={styles.title}>Looking to Hire <span style={{ color: "#d6a7f5" }}>Me</span>?</h2>
            </motion.div>

            <div className={styles.socIcons}>
                <EachContact
                    index={0}
                    Icon={FaLinkedinIn}
                    href="https://www.linkedin.com/in/emmanuella-aliu/"
                />
                <EachContact
                    index={1}
                    Icon={GrMail}
                    href="mailto:emma.aliu64@gmail.com"
                />

                <EachContact
                    index={2}
                    Icon={FaPhone}
                    href="tel:3062619728"
                    onHover={true}
                />
            </div>
        </div >
    )
}

const EachContact = ({ index, Icon, href, onHover = false }) => {
    const [toDisplay, setToDisplay] = useState("")
    const [IconToDisplay, setIconToDisplay] = useState(() => Icon)

    const Empty = () => <></>

    const whenHover = () => {
        setToDisplay("306-261-9728")
        setIconToDisplay(() => Empty)
    }

    const whenNotHover = () => {
        setToDisplay("")
        setIconToDisplay(() => Icon)
    }


    return (
        <Tilt className={styles.contact}>
            <a href={href} onMouseEnter={onHover ? () => whenHover() : () => setToDisplay("")} onMouseLeave={() => whenNotHover()}>
                <motion.div
                    variants={fadeIn("right", "", 0.5 * index, 0.75)}
                    style={{
                        Width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        // boxShadow: "5px 5px 5px 5px #211e35"

                    }}

                >
                    <div
                        options={{ max: 45, scale: 1, speed: 450 }}
                        className={styles.icon}
                    >
                        <IconToDisplay />
                        <p className={styles.contactText}>{toDisplay}</p>
                    </div>
                </motion.div>
            </a>
        </Tilt>
    )
}

export default SectionWrapper(Contact, "contact")