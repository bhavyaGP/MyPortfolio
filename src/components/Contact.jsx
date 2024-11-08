import { CONTACT } from "../constants"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            className='border-b border-neutral-900 py-9'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
        >
            <motion.h2
                className='my-20 text-center text-4xl'
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
            >
                Get In
                <span className='text-neutral-500'> Touch  </span>
            </motion.h2>
            <motion.div
                className='text-center tracking-tighter'
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
            >
                <p className="my-4 ">{CONTACT.address}</p>
                <p className="my-4 ">{CONTACT.phoneNo}</p>
                <a href={`mailto:${CONTACT.email}`} className="border-b py-2">{CONTACT.email}</a>
            </motion.div>
        </motion.div>
    )
}

export default Contact