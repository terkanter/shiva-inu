'use client'
import {motion} from "framer-motion";
import Marquee from "react-fast-marquee";
import cx from "clsx";

export const getShivaMarqueeContent = () => new Array(20).fill('SHIVA INU').map((text, index) => <span key={index} className="mx-1">{text}</span>)

export const ShivaSingleMarquee = ({ className }: { className?: string}) => {
    return (
        <div
            className={cx("z-1 w-screen h-12 bg-white font-bold flex items-center justify-center text-black whitespace-nowrap", className)}
        >
            <Marquee>
                {getShivaMarqueeContent()}
            </Marquee>
        </div>
    )
}

export const ShivaMarquee = () => (
    <div className="h-10">
        <div
            className="w-screen rotate-1 h-12 bg-neutral-400 font-bold flex items-center justify-center text-black whitespace-nowrap"
        >
            <Marquee direction="right">
                {getShivaMarqueeContent()}
            </Marquee>
        </div>
        <div
            className="w-screen -rotate-2 -translate-y-10 h-12 bg-white font-bold flex items-center justify-center text-black whitespace-nowrap"
        >
            <Marquee>
                {getShivaMarqueeContent()}
            </Marquee>
        </div>
    </div>

)
