'use client'
import {motion, useAnimation, useInView, Variant} from 'framer-motion';
import {useEffect, useRef} from "react";


type AnimatedTextProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    once?: boolean;
    repeatDelay?: number;
    animation?: {
        hidden: Variant;
        visible: Variant;
    };
};

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.03,
        },
    },
};
export const AnimatedText = ({
                                 text,
                                 el: Wrapper = "p",
                                 className,
                                 once,
                                 repeatDelay,
                                 animation = defaultAnimations,
                             }: AnimatedTextProps) => {
    const controls = useAnimation();
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.5, once});

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const show = () => {
            controls.start("visible");
            if (repeatDelay) {
                timeout = setTimeout(async () => {
                    await controls.start("hidden");
                    controls.start("visible");
                }, repeatDelay);
            }
        };

        if (isInView) {
            show();
        } else {
            controls.start("hidden");
        }

        return () => clearTimeout(timeout);
    }, [isInView]);

    return (
        <Wrapper className={className}>
            <span className="sr-only">{textArray.join(" ")}</span>
            <motion.span
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: {transition: {staggerChildren: 0.05}},
                    hidden: {},
                }}
                aria-hidden
            >
                {textArray.map((line, lineIndex) => (
                    <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
                <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                    <motion.span
                        key={`${char}-${charIndex}`}
                        className="inline-block"
                        variants={animation}
                    >
                        {char}
                    </motion.span>
                ))}
                    <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
                ))}
            </motion.span>
        </Wrapper>
    );
};
export const TokenAdress: React.FC = () => {
    return (
        <div className="min-h-screen-[50vh] py-16 h-full w-full flex flex-col items-center justify-center ">
            <div
                // initial="hidden"
                // animate="visible"
                className="p-16 border-white flex gap-2 flex-col items-center justify-center gap-4"
                // variants={{
                //     visible: {
                //         scale: 1,
                //         opacity: 1,
                //         transition: { duration: 0.5 }
                //     },
                //     hidden: {
                //         scale: 0.6,
                //         opacity: 0,
                //     },
                // }}
            >
                <h3 className="text-2xl md:text-4xl font-bold tracking-wider text-center">Token Adress</h3>
                <AnimatedText
                    el="h2"
                    text={[
                        "EQCcHkucQmtIwKivdWAli7uPguFdPW8qS00lqTIWLBGn9rNT"
                    ]}
                    className="text-base md:text-xl"
                    repeatDelay={10000}
                />
            </div>
        </div>
    )
}