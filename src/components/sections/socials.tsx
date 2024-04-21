import {DexIcon} from "@/components/icons/dex";
import {TelegramIcon} from "@/components/icons/telegram";
import {TwitterIcon} from "@/components/icons/twitter";
import {GekkoIcon} from "@/components/icons/gekko";

const socialItems = [
    { Icon: DexIcon, link: "https://dexscreener.com/ton/eqagdnihcgj_r0fb94wsyjhq_ktrdc0sp2xtf_saafg0zpbs" },
    { Icon: TelegramIcon, link: "https://t.me/shivaportal" },
    { Icon: TwitterIcon, link: "https://twitter.com/shiva_inu_ton" },
    { Icon: GekkoIcon, link: "https://www.geckoterminal.com/ton/pools/EQBiVvLj4-gIt2eYOLC1hfjF1MzurRzGqTJH-FguyZw-EsCg" },
]

export const SocialLinksSection = () => {
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
                    Join the shiva community
                </p>
                <div className="flex flex-row space-x-8 mt-8">
                    {socialItems.map(({ Icon, link }, index) => (
                        <a key={index} href={link} target="_blank" className="text-white hover:scale-110 transition-all duration-150">
                            <Icon className="w-[50px] h-[50px] text-xl" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}