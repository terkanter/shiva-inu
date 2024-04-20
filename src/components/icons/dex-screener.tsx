import {HTMLAttributes} from "react";

export const DexScreenerIcon = (props: HTMLAttributes<HTMLImageElement>) => {
    return (
        <img
            {...props}
            alt="dex screener icon"
            src='/icons/dexscreener.png'
        />
    )
}