'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export const Navbar =() => (
    <header className="flex flex-row w-full py-4 absolute top-0 px-8">
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {duration: 0.6}
                },
                hidden: {
                    scale: 0.9,
                    opacity: 0,
                },
            }}
        >
            <Image src="/shiva-mini.png" priority width={72} height={72} alt="shiva-mini" />
        </motion.div>
    </header>
)