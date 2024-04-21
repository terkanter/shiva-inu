'use client'
import {motion} from "framer-motion";
import Marquee from "react-fast-marquee";

const getShivaMarqueeContent = () => new Array(20).fill('SHIVA INU').map((text, index) => <span key={index} className="mx-1">{text}</span>)

export const ShivaMarquee = () => (
    <div className="h-10">
        <motion.div
            className="w-screen rotate-1 h-12 bg-white opacity-70 font-bold flex items-center justify-center text-black whitespace-nowrap"
        >
            <Marquee direction="right">
                {getShivaMarqueeContent()}
            </Marquee>
        </motion.div>
        <motion.div
            className="w-screen -rotate-2 -translate-y-10 h-12 bg-white font-bold flex items-center justify-center text-black whitespace-nowrap"
        >
            <Marquee>
                {getShivaMarqueeContent()}
            </Marquee>
        </motion.div>
    </div>

)
