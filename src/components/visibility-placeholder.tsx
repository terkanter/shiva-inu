import {useEffect, useState} from "react";

const VisibilityPlaceholder = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if(!isVisible) {
            document.body.style.overflow = 'hidden'

            setTimeout(() => {
                document.body.style.overflow = 'visible'
            }, 600)

        }

        if(isVisible) {
            document.body.style.overflow = '';
        }

        return () => {
        }
    }, [isVisible])

    return (
        <div>

        </div>
    )
}