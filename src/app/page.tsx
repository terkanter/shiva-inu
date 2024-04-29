'use client'
import {Navbar} from "@/components/navbar";
import {Hero} from "@/components/sections/Hero";
import {ShivaMarquee, ShivaSingleMarquee} from "@/components/shiva-marquee";
import {SocialLinksSection} from "@/components/sections/socials";
import {LinksSection} from "@/components/sections/links";
import {TokenAdress} from "@/components/sections/token-adress";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'visible'
    }, [])

    return (
        <main className="max-w-[100vw] overflow-x-hidden">
            {/*<ShivaSingleMarquee className="absolute -mt-[40px] left-0 right-0" />*/}
            <div className="relative w-full min-h-screen flex flex-col items-center bg-black z-20">
                <div className="flex relative w-full max-w-[1200px] m-auto flex-col items-center">
                    <Navbar/>
                    <Hero/>
                    <div className="min-h-[10vh]"/>
                    <TokenAdress />
                    {/*<ShivaMarquee/>*/}
                    <LinksSection/>
                    <div className="min-h-[10vh]"/>
                </div>
                <ShivaMarquee />
            </div>
            <SocialLinksSection />
        </main>
    );
}
