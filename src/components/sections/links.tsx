'use client'
import {StonFiIcon} from "@/components/icons/ston-fi";
import {DeDustIcon} from "@/components/icons/de-dust";
import {GekoTerminalIcon} from "@/components/icons/geko-terminal";
import {DexScreenerIcon} from "@/components/icons/dex-screener";
import {TonRaflesIcon} from "@/components/icons/ton-rafles";
import {TonScreenerIcon} from "@/components/icons/ton-screener";

import {motion, useAnimation, useInView} from 'framer-motion';
import {useEffect, useRef} from "react";
import cx from "clsx";

const linksItems = [
    [
        // {Icon: TonRaflesIcon, label: "", description: "StonFi", link: "https://tonraffles.app/lock/EQBiVvLj4-gIt2eYOLC1hfjF1MzurRzGqTJH-FguyZw-EsCg\n"},
        {Icon: StonFiIcon, label: "", description: "Pool 1", link: "https://app.ston.fi/swap?ft=EQCcHkucQmtIwKivdWAli7uPguFdPW8qS00lqTIWLBGn9rNT\n"},
        {Icon: DeDustIcon, label: "", description: "Pool 2", link: "https://dedust.io/swap/TON/EQCcHkucQmtIwKivdWAli7uPguFdPW8qS00lqTIWLBGn9rNT\n"}
    ],
    [
        {Icon: GekoTerminalIcon, label: "", description: "Chart Pool 1 ", link: "https://www.geckoterminal.com/ton/pools/EQBiVvLj4-gIt2eYOLC1hfjF1MzurRzGqTJH-FguyZw-EsCg\n"},
        {Icon: DexScreenerIcon, label: "", description: "Chart Pool 2", link: "https://dexscreener.com/ton/eqagdnihcgj_r0fb94wsyjhq_ktrdc0sp2xtf_saafg0zpbs\n"},
        {Icon: TonRaflesIcon, label: "", description: "Future Team Fund that was bought back", link: "https://tonraffles.app/lock/EQCcHkucQmtIwKivdWAli7uPguFdPW8qS00lqTIWLBGn9rNT\n"},
        {Icon: TonScreenerIcon, label: "", description: "1% to Pavel Durov", link: "https://tonviewer.com/transaction/43f2293cff27700c44bb11f2db17091391118db7cb38f897ead2ffe23c041ce2\n"}
    ],
    [
        // {Icon: TonRaflesIcon, label: "", description: "Dedust", link: "https://tonraffles.app/lock/EQAgDnIHcgj_R0fb94WsyjHq_ktrdC0sp2xTF_SaAfg0zpbs\n"},
        {Icon: TonRaflesIcon, label: "", description: "LP Locks Pool 1", link: "https://tonraffles.app/lock/EQBiVvLj4-gIt2eYOLC1hfjF1MzurRzGqTJH-FguyZw-EsCg\n"},
        {Icon: TonRaflesIcon, label: "", description: "LP Locks Pool 2", link: "https://tonraffles.app/lock/EQAgDnIHcgj_R0fb94WsyjHq_ktrdC0sp2xTF_SaAfg0zpbs\n"}
    ]
]


const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
};

export const LinksSection = () => {
    const linksRef = useRef<HTMLDivElement>(null)
    const controls = useAnimation();

    const isInView = useInView(linksRef, { once: true})

    useEffect(() => {
        const show = () => {
            controls.start("visible");
        };

        if (isInView) {
            show();
        }


        }, [isInView]);

    return (
        <motion.div
            className="z-30 relative min-h-screen flex flex-col items-center justify-center"
            initial="hidden"
            animate={controls}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
            <motion.h2
                variants={itemVariants}
                className="text-center text-6xl font-semibold text-white "
            >
                LINKS
            </motion.h2>

            <div ref={linksRef} className="flex flex-col md:flex-row gap-4 md:gap-0 md:space-x-8 my-16">
                {linksItems.map((column, k) => (
                    <div className="flex flex-col space-y-4" key={k}>
                        {column.map(({Icon, description, link}, index) => (
                            <motion.a
                                key={k + index}
                                target="_blank"
                                href={link}
                                variants={itemVariants}
                                className="group md:max-w-[240px] flex flex-col gap-2"
                            >
                                <div
                                    className={cx(
                                        "flex justify-center max-h-[60px] items-center bg-white p-4 px-8 group-hover:scale-110 transition-all duration-150 cursor-pointer",
                                    )}
                                >
                                    <Icon/>
                                </div>
                                <p className="text-xs font-light pr-4 uppercase text-wrap md:min-h-8">
                                    {description}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

