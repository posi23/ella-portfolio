import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import "./SectionWrapper.css"

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="sectionWrapper"
            >
                <Component />
            </motion.div>
        )
    }

export default SectionWrapper