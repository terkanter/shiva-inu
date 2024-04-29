'use client'
import {forwardRef, useCallback, useEffect, useRef} from "react";
import {motion, useAnimation, useInView, useScroll, useTransform} from "framer-motion";
import {ButtonBuy} from "@/components/button";
import Image from "next/image";
import {Clouds2Icon, Clouds3Icon, CloudsTopRightIcon} from "@/components/icons/clouds";
import {useStore} from "@/lib/store";


const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const staggerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
}

export const AnimatedHeroContent = ({ }) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, []);

    return (
        <motion.div
            className="md:h-[993px] w-full z-20 relative flex flex-col items-start justify-start pt-32 md:pt-36"
            initial="hidden"
            animate={controls}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}

        >
            <div
                className="px-6 flex flex-col gap-6 items-start"
            >
                <h1
                    className="text-6xl md:text-8xl font-bold"
                >
                    {'SHIVA INU'.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            variants={staggerVariants}
                        >
                            {char}
                        </motion.span>
                    ))}
                </h1>
                <div className="max-w-[300px] font-light text-xs uppercase md:text-base flex flex-col gap-4">
                    <p>
                        {'Utilizing community power in the growing TON DeFi ecosystem.'.split(' ').map((char, index) => (
                            <motion.span
                                key={index}
                                variants={itemVariants}
                            >
                                {char}{' '}
                            </motion.span>

                        ))}
                    </p>
                    <p>
                        {'A Proper memecoin, Done right.'.split(' ').map((char, index) => (
                            <motion.span
                                key={index}
                                variants={itemVariants}
                            >
                                {char}{' '}
                            </motion.span>

                        ))}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export const HeroContent = ({y, showButton = true}) => {
    return (
        <motion.div
            className="md:h-[993px] w-full z-20 relative flex flex-col items-start justify-start pt-32 md:pt-36"
            style={{y: y}}
        >
            <div
                className="px-6 flex flex-col gap-6 items-start"
            >
                <h1 className="text-6xl md:text-8xl font-bold">
                    SHIVA INU
                </h1>
                <div className="max-w-[300px] font-light text-xs uppercase md:text-base flex flex-col gap-4">
                    <p>
                        Utilizing community power in the growing TON DeFi ecosystem.
                    </p>
                    <p>
                        A Proper memecoin, Done right
                    </p>
                </div>
                {showButton ? (
                    <ButtonBuy/>
                ) : null}
            </div>
        </motion.div>
    )
}
HeroContent.displayName = 'HeroContent'

export const HeroWrapper = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="w-full relative"
            // onMouseMove={(ev)=> handleMouseMove(ev)}
        >
            {props.children}
        </div>
    )
})

const useMouseMove = (callback) => {

    const ref = useRef();

    const handleMouseMove = useCallback(
        (e) => (
            // console.log(e.pageX, window.innerWidth, e.pageX / window.innerWidth, 0.5 - (e.pageX / window.innerWidth)),
            callback({
                x: 1 - (e.pageX / window.innerWidth),
                y: 1 - (e.pageY / window.innerHeight),
            })
        ),
        []
    );

    const callbackRef = useCallback(
        (node) => {
            if (ref.current) {
                //@ts-ignore
                ref.current.removeEventListener("mousemove", handleMouseMove);
            }

            ref.current = node;

            if (ref.current) {
                //@ts-ignore
                ref.current.addEventListener("mousemove", handleMouseMove);
            }
        },
        [handleMouseMove]
    );

    return [ref, callbackRef];
};

const HeroDesktop = ({}) => {
    // const xPos = useMotionValue(0.5)
    // const yPos = useMotionValue(0.5)
    // const scrollYProgress = useMotionValue(0)

    const [ref, callbackRef] = useMouseMove(
        ({x, y}) => {
            // setTimeout(() => {
            //     xPos.set(x);
            //     yPos.set(y);
            // }, 100)
        }
    );

    const {scrollY, scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     const percentage = latest / ref.current.clientHeight;
    //     scrollYProgress.set(percentage);
    // })

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // const backgroundYMouse = useTransform(
    //     yPos,
    //     [-1, 1],
    //     ["-5%", "5%"]
    // );

    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "50%"]
    );

    // const backgroundX = useTransform(
    //     xPos,
    //     [-1, 1],
    //     ["-10%", "10%"],
    //     {ease: cubicBezier(0.17, 0.67, 1, 1)}
    // );
    // const backgroundXReverse = useTransform(
    //     xPos,
    //     [-1, 1],
    //     ["10%", "-10%"],
    //     {ease: cubicBezier(0.17, 0.67, 1, 1)}
    // );

    // const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    // const backgroundXReverse = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);


    return (
        <HeroWrapper
            ref={callbackRef}
        >
            <HeroContent y={textY}/>

            <div className="hidden lg:block pointer-events-none">
                <motion.div
                    className="absolute right-[36px] top-[44px] z-20 "
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
                    <Image
                        priority
                        unoptimized
                        src='/shiva-large-2.png'
                        alt="shiva-big"
                        width={768} height={859}
                        className=""
                    />
                </motion.div>
                {/*BOTTOM LEFT*/}
                <motion.div
                    className="absolute z-20 bottom-[-20px] left-[-22%] pointer-events-none"
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

                    style={{
                        // x: backgroundX,
                        // y: backgroundYMouse,
                    }}
                >
                    <Clouds2Icon className=""/>
                </motion.div>
                <motion.div
                    className="absolute z-20 bottom-[-18%] right-[-12%] pointer-events-none"
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

                    style={{
                        // x: backgroundXReverse
                        // y: backgroundYMouse,
                    }}
                >
                    <Clouds3Icon/>
                </motion.div>

                {/*TOP RIGHT */}
                <motion.div
                    className="absolute z-10 top-[-16px] right-[-70%] "
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
                    style={{
                        y: backgroundY,
                        // x: backgroundX
                    }}
                >
                    <CloudsTopRightIcon className=""/>
                </motion.div>
            </div>
        </HeroWrapper>
    )
}

const HeroMobile = ({}) => {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const backgroundXReverse = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    return (
        <HeroWrapper
            ref={ref}
        >

            <HeroContent y={textY}/>
            <div className="flex items-center lg:hidden relative mb-24 ">
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
                    style={{
                        // y: textY,
                    }}
                    className="mx-[-9%] relative z-20 pointer-events-none"
                >
                    <Image
                        priority
                        unoptimized
                        src='/shiva-large-2.png'
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
                    <CloudsTopRightIcon className="h-[445px] pointer-events-none"/>
                </motion.div>
                {/*/!*BOTTOM LEFT*!/*/}
                <motion.div
                    className="absolute z-20 bottom-[10%] right-[-30%] pointer-events-none"
                    style={{
                        x: backgroundX,
                    }}
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
                    <Clouds2Icon className="h-[100vw] pointer-events-none"/>
                </motion.div>
                <motion.div
                    className="absolute z-20 bottom-[-30%] left-[-50%] pointer-events-none"
                    style={{
                        x: backgroundXReverse,
                    }}
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
                    <Clouds3Icon className="h-[100vw] pointer-events-none"/>
                </motion.div>
            </div>
        </HeroWrapper>
    )
}

export const Hero: React.FC = () => {
    const introOut = useStore(({introOut}) => introOut)
    const setIntroOut = useStore(({setIntroOut}) => setIntroOut)

    if (!introOut) {
        return (
            <HeroWrapper>
                <HeroContent/>
            </HeroWrapper>
        )
    }

    if (window.innerWidth > 600) {
        return <HeroDesktop/>
    }

    return <HeroMobile/>
}
