import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";

export default function useVisibility<Element extends HTMLElement>(
    offset = 0,
    throttleMilliseconds = 100
): [boolean, React.RefObject<Element | undefined>] {
    const [isVisible, setIsVisible] = useState(false);
    const currentElement = useRef<Element>();

    const onScroll = throttle(() => {
        if (!currentElement.current) {
            setIsVisible(false);
            return;
        }

        const top = currentElement.current.getBoundingClientRect().top;

        if (!isVisible) {
            setIsVisible(top - offset <= window.innerHeight);
        }
    }, throttleMilliseconds);

    useEffect(() => {
        document.addEventListener("scroll", onScroll, true);
        return () => document.removeEventListener("scroll", onScroll, true);
    });

    return [isVisible, currentElement];
}
