import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {ButtonBuy} from "@/components/button";
import Image from "next/image";
import {Clouds2Icon, Clouds3Icon, CloudsTopRightIcon} from "@/components/icons/clouds";

export const Hero: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const backgroundXReverse = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    // const handleMouseMove = (e) => {
    //     console.log(e.screenY, e.screenX, window.innerWidth, window.innerHeight)
    // }

    return (
        <div
            ref={ref}
            className="w-full relative mt-6"
            // onMouseMove={(ev)=> handleMouseMove(ev)}
        >
            <motion.div
                className="md:h-[993px] w-full z-20 relative flex flex-col items-start justify-start pt-32 md:pt-48"
                style={{ y: textY }}
            >
                <div
                    className="px-6 flex flex-col gap-6 items-start"
                >
                    <h1 className="text-6xl md:text-8xl font-bold">
                        $HIVA INU
                    </h1>
                    <div className="max-w-[300px] font-light text-xs uppercase md:text-base flex flex-col gap-4">
                        <p>
                            Utilizing community power in the growing TON DeFi ecosystem.
                        </p>
                        <p>
                            A Proper memecoin, Done right
                        </p>
                    </div>
                    <ButtonBuy/>
                </div>
            </motion.div>
            <div className="hidden md:block pointer-events-none">
                <motion.div
                    style={{
                        // y: textY,
                    }}
                    className="absolute right-[36px] top-[44px] z-20"
                >
                    <Image
                        priority
                        unoptimized
                        src='/shiva-large.png'
                        alt="shiva-big"
                        width={768} height={859}
                    />
                </motion.div>
                {/*BOTTOM LEFT*/}
                <motion.div
                    className="absolute z-20 bottom-[-10px] left-[-22%] pointer-events-none"
                    style={{
                        // y: textY,
                    }}
                >
                    <Clouds2Icon/>
                </motion.div>
                <motion.div
                    className="absolute z-20 bottom-[-15%] right-[-12%] pointer-events-none"
                    style={{
                        // y: backgroundX,
                    }}
                >
                    <Clouds3Icon/>
                </motion.div>

                {/*TOP RIGHT */}
                <motion.div
                    className="absolute z-10 top-[-16px] right-[-70%] "
                    style={{
                        y: backgroundY,
                    }}
                >
                    <CloudsTopRightIcon className=""/>
                </motion.div>
            </div>

            <div className="flex items-center md:hidden relative mb-24 ">
                <motion.div
                    style={{
                        // y: textY,
                    }}
                    className="mx-[-9%] relative z-20 pointer-events-none"
                >
                    <Image
                        priority
                        unoptimized
                        src='/shiva-large.png'
                        alt="shiva-big"
                        width={768} height={859}
                    />
                </motion.div>
                {/*TOP RIGHT */}
                <motion.div
                    className="absolute z-10 top-[-40%] left-[-50%] pointer-events-none"
                    style={{
                        y: backgroundY,
                    }}
                >
                    <CloudsTopRightIcon className="h-[445px] pointer-events-none"/>
                </motion.div>
                {/*/!*BOTTOM LEFT*!/*/}
                <motion.div
                    className="absolute z-20 bottom-[10%] right-[-30%] pointer-events-none"
                    style={{
                        x: backgroundX,
                    }}
                >
                    <Clouds2Icon className="h-[100vw] pointer-events-none"/>
                </motion.div>
                <motion.div
                    className="absolute z-20 bottom-[-30%] left-[-50%] pointer-events-none"
                    style={{
                        x: backgroundXReverse,
                    }}
                >
                    <Clouds3Icon className="h-[100vw] pointer-events-none"/>
                </motion.div>

            </div>
        </div>
    )
}
