import {Navbar} from "@/components/navbar";
import {Hero} from "@/components/sections/Hero";
import {ShivaMarquee} from "@/components/shiva-marquee";
import {SocialLinksSection} from "@/components/sections/socials";
import {LinksSection} from "@/components/sections/links";
import {TokenAdress} from "@/components/sections/token-adress";

export default function Home() {

    return (
        <main className="max-w-[100vw] overflow-x-hidden">
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
