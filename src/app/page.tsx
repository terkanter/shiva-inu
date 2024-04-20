'use client'
import {Navbar} from "@/components/navbar";
import {Hero} from "@/components/Hero";
import {TonRaflesIcon} from "@/components/icons/ton-rafles";
import {StonFiIcon} from "@/components/icons/ston-fi";
import {DeDustIcon} from "@/components/icons/de-dust";
import {DexScreenerIcon} from "@/components/icons/dex-screener";
import {TonScreenerIcon} from "@/components/icons/ton-screener";
import {GekoTerminalIcon} from "@/components/icons/geko-terminal";
import {ShivaMarquee} from "@/components/shiva-marquee";
import {TwitterIcon} from "@/components/icons/twitter";
import {TelegramIcon} from "@/components/icons/telegram";
import {GekkoIcon} from "@/components/icons/gekko";

const linksItems = [
    [
        {Icon: TonRaflesIcon, label: "", description: "StonFi", link: "https://tonraffles.app/lock/EQBiVvLj4-gIt2eYOLC1hfjF1MzurRzGqTJH-FguyZw-EsCg\n"},
        {Icon: StonFiIcon, label: "", description: "Pool 1", link: "https://app.ston.fi/swap?ft=EQCcHkucQmtIwKivdWAli7uPguFdPW8qS00lqTIWLBGn9rNT\n"},
        {Icon: DeDustIcon, label: "", description: "Pool 2", link: "https://dedust.io/swap/TON/EQCcHkucQmtIwKivdWAli7uPguFdPW8qS00lqTIWLBGn9rNT\n"}
    ],
    [
        {Icon: TonRaflesIcon, label: "", description: "Future Team Fund that was bought back", link: "https://tonraffles.app/lock/EQCcHkucQmtIwKivdWAli7uPguFdPW8qS00lqTIWLBGn9rNT\n"},
        {Icon: GekoTerminalIcon, label: "", description: "Chart Pool 1 ", link: "https://www.geckoterminal.com/ton/pools/EQBiVvLj4-gIt2eYOLC1hfjF1MzurRzGqTJH-FguyZw-EsCg\n"},
        {Icon: DexScreenerIcon, label: "", description: "Chart Pool 2", link: "https://dexscreener.com/ton/eqagdnihcgj_r0fb94wsyjhq_ktrdc0sp2xtf_saafg0zpbs\n"},
        {Icon: TonScreenerIcon, label: "", description: "1% to Pavel Durov", link: "https://tonviewer.com/transaction/43f2293cff27700c44bb11f2db17091391118db7cb38f897ead2ffe23c041ce2\n"}
    ],
    [
        {Icon: TonRaflesIcon, label: "", description: "Dedust", link: "https://tonraffles.app/lock/EQAgDnIHcgj_R0fb94WsyjHq_ktrdC0sp2xTF_SaAfg0zpbs\n"},
        {Icon: TonRaflesIcon, label: "", description: "LP Locks Pool 1", link: "https://tonraffles.app/lock/EQBiVvLj4-gIt2eYOLC1hfjF1MzurRzGqTJH-FguyZw-EsCg\n"},
        {Icon: TonRaflesIcon, label: "", description: "LP Locks Pool 2", link: "https://tonraffles.app/lock/EQAgDnIHcgj_R0fb94WsyjHq_ktrdC0sp2xTF_SaAfg0zpbs\n"}
    ]
]

const LinksSection = () => {
    return (
        <div className="z-30 relative">
            <h2 className="text-center text-6xl font-semibold text-white ">
                LINKS
            </h2>

            <div className="flex flex-col md:flex-row md:space-x-8 my-16">
                {linksItems.map((column, k) => (
                    <div className="flex flex-col space-y-4" key={k}>
                        {column.map(({Icon, description, link}, index) => (
                            <a
                                key={k + index}
                                target="_blank"
                                href={link}
                                className="group max-w-[240px] flex flex-col gap-2"
                            >
                                <div className="flex justify-center items-center bg-white p-4 px-8 group-hover:scale-110 transition-all duration-150 cursor-pointer">
                                    <Icon/>
                                </div>
                                <p className="text-xs font-light pr-4 uppercase text-wrap min-h-8">
                                    {description}
                                </p>
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

const socialItems = [
    { Icon: TelegramIcon, link: "" },
    { Icon: TwitterIcon, link: "" },
    { Icon: GekkoIcon, link: "" },
    // { Icon: TwitterIcon, link: "" },
]

const SocialLinksSection = () => {
    return (
        <div
            className="flex flex-col p-8 h-96 bg-[var(--primary)]"
            style={{
                // backgroundImage: "url(/img/footer-bg.svg)",
                // backgroundRepeat: 'no-repeat',
                // backgroundSize: 'cover',
                // backgroundAttachment: 'fixed',
            }}
        >
            <div className="fixed bottom-0 h-96 right-0 left-0 z-0 py-24 flex flex-col items-center justify-center gap-2">
                <h2 className="text-center text-6xl font-semibold text-white uppercase tracking-wider">
                    SOCIALS
                </h2>
                <p className="uppercase text-xl font-light">
                    Join the $hiva community
                </p>
                <div className="flex flex-row space-x-8 mt-8">
                    {socialItems.map(({ Icon, link }, index) => (
                        <a key={index} href={link} target="_blank" className="hover:scale-110 transition-all duration-150">
                            <Icon className="w-[50px] h-[50px] text-xl" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <main className="max-w-[100vw] overflow-x-hidden">
            <div className="relative w-full min-h-screen flex flex-col items-center bg-black z-20">
                <div className="flex relative w-full max-w-[1200px] m-auto flex-col items-center">
                    <Navbar/>
                    <Hero/>
                    <div className="min-h-[10vh]"/>
                    {/*<ShivaMarquee/>*/}
                    <LinksSection/>
                    <div className="min-h-[10vh]"/>
                </div>
                <ShivaMarquee/>
            </div>
            <SocialLinksSection />
        </main>
    );
}
