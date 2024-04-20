import {HTMLAttributes} from "react";

export const GekoTerminalIcon = (props: HTMLAttributes<HTMLImageElement>) => {
    return (
        <img
            {...props}
            alt="de dust icon"
            src='/icons/gekko.png'
        />
    )
}