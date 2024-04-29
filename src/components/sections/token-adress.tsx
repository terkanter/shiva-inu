'use client'
import {motion, useAnimation, useInView, Variant} from 'framer-motion';
import {ReactNode, useEffect, useRef, useState} from "react";
import cx from "clsx";
import {Button} from "@/components/button";

const TOKEN_ADDRESS = "EQCcHkucQmtIwKivdWAli7uPguFdPW8qS00lqTIWLBGn9rNT"

type AnimatedTextProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    once?: boolean;
    repeatDelay?: number;
    onClick?: () => void;
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
                                 onClick
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
            // controls.start("hidden");
        }

        return () => clearTimeout(timeout);
    }, [isInView]);

    return (
        <Wrapper onClick={onClick} className={cx('cursor-copy', className)}>
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

const Box = ({children, className}: { children: ReactNode, className: string }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {duration: 0.5},
                },
                hidden: {
                    scale: 0.8,
                    opacity: 0,
                },
            }}
        >
            <div className="flex w-full">
                <div className="w-3 h-3 border-b-2 border-r-[3px]"/>
                <div className="w-full flex-1 border-t-[3px]"/>
                <div className="w-3 h-3 border-b-2 border-l-[3px]"/>
            </div>
            <div className={cx("border-x-[3px] relative", className)}>
                {children}
            </div>
            <div className="flex w-full">
                <div className="w-3 h-3 border-t-2 border-r-[3px]"/>
                <div className="w-full flex-1 border-b-[3px]"/>
                <div className="w-3 h-3 border-t-2 border-l-[3px]"/>
            </div>
        </motion.div>
    )
}

export const TokenAdress: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(TOKEN_ADDRESS);
        setCopied(true);
    };

    return (
        <div className="pt-32 pb-64 md:py-32 h-full w-full flex flex-col items-center justify-center">
            <div
                className="px-8 md:p-16 border-white flex gap-2 flex-col items-center justify-center gap-4"
            >
                <Box className="flex flex-col gap-4 items-center justify-center pt-8 pb-4 md:pb-12 px-8">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-wider text-center">
                        Token Address
                    </h3>
                    <AnimatedText
                        el="h2"
                        text={[
                            TOKEN_ADDRESS
                        ]}
                        onClick={copyToClipboard}
                        className="text-base md:text-xl text-center"
                        repeatDelay={10000}
                    />
                    <div className="absolute bottom-[-36px] left-0 right-0 flex justify-center">
                        <Button onClick={copyToClipboard} inverse={copied}>
                            {copied ? "Copied!" : "Copy"}
                        </Button>
                    </div>
                </Box>
            </div>
        </div>
    )
}