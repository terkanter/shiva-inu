import {HTMLAttributes} from "react";
import cx from 'clsx'

export const ButtonBuy = (props: HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className={cx(
                "relative",
                "before:content-[''] before:absolute before:w-full before:h-full before:-right-2 before:-bottom-2 before:border-2 before:border-white cursor-pointer",
                props.className
            )}
        >
            <span className={cx(
                "p-2 md:p-3 px-8 md:px-12 bg-[var(--primary)] inline-flex items-center justify-center uppercase text-md z-10 relative",
                "hover:translate-y-2 hover:translate-x-2 transition-all duration-100 ease-out",
            )}>
                Buy now
            </span>
        </button>
    )
}