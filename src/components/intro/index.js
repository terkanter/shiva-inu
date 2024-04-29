'use client';
import cn from 'clsx'
import {useStore} from '@/lib/store'
import {useEffect, useState} from 'react'
import s from './intro.module.css'
import {AnimatedHeroContent} from "@/components/sections/Hero";

export const Intro = () => {
    const isMobile = false;
    const [isLoaded, setIsLoaded] = useState(false)
    const [scroll, setScroll] = useState(false)
    const introOut = useStore(({introOut}) => introOut)
    const setIntroOut = useStore(({setIntroOut}) => setIntroOut)
    // const lenis = useStore(({ lenis }) => lenis)

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 1500)
    }, [])

    useEffect(() => {
        if (isMobile) {
            // lenis.start()
            document.documentElement.classList.toggle('intro', false)
            return
        }

        if (!scroll) {
            document.documentElement.classList.toggle('intro', true)
        }

        if (scroll) {
            // lenis.start()
            document.documentElement.classList.toggle('intro', false)
        } else {
            setTimeout(() => {
                // lenis.stop()
            }, 0)

            document.documentElement.classList.toggle('intro', true)
        }
    }, [scroll, isMobile])

    return (
        <div className={cn(s.root, introOut && 'hidden')}>
            <div
                className={cn(s.wrapper, isLoaded && s.out)}
                onTransitionEnd={(e) => {
                    e.target.classList.forEach((value) => {
                        if (value.includes('out')) {
                            setScroll(true)
                        }
                        setIntroOut(true)
                    })
                }}
            >
            </div>
            <div className="absolute w-full h-full z-10">
                <div className="flex relative w-full max-w-[1200px] m-auto flex-col items-center">
                    <AnimatedHeroContent showButton={false}/>
                </div>
            </div>
        </div>
    )
}
