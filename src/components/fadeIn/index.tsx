import React, {
    JSXElementConstructor,
    PropsWithChildren,
    useEffect,
    useState,
} from "react";

interface Props {
    /*
     * In Ms
     */
    delay?: number;
    /*
     * In Ms
     */
    transitionDuration?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    wrapperTag?: JSXElementConstructor<any>;
    className?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    childTag?: JSXElementConstructor<any>;
    childClassName?: string;
    visible?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onComplete?: () => any;
    direction?: "up" | "down" | "left" | "right";
}

const mapDirectionToCss = {
    up: "translateY(100px)",
    down: "translateY(-100px)",
    left: "translateX(100px)",
    right: "translateX(-100px)",
};

export default function FadeIn({
    delay = 50,
    transitionDuration = 400,
    wrapperTag,
    childTag,
    className,
    childClassName,
    visible = true,
    onComplete,
    direction = "up",
    children,
}: PropsWithChildren<Props>) {
    const [maxIsVisible, setMaxIsVisible] = useState(0);
    const WrapperTag = wrapperTag || "div";
    const ChildTag = childTag || "div";

    useEffect(() => {
        let count = React.Children.count(children);
        if (!visible) {
            // Animate all children out
            count = 0;
        }

        if (count == maxIsVisible) {
            // We're done updating maxVisible, notify when animation is done
            const timeout = setTimeout(() => {
                if (onComplete) onComplete();
            }, transitionDuration);
            return () => clearTimeout(timeout);
        }

        // Move maxIsVisible toward count
        const increment = count > maxIsVisible ? 1 : -1;
        const timeout = setTimeout(() => {
            setMaxIsVisible(maxIsVisible + increment);
        }, delay);
        return () => clearTimeout(timeout);
    }, [
        delay,
        maxIsVisible,
        visible,
        transitionDuration,
        children,
        onComplete,
    ]);

    return (
        <WrapperTag className={`fade-in-container ${className}`}>
            {React.Children.map(children, (child, i) => {
                return (
                    <ChildTag
                        className={childClassName}
                        style={{
                            transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
                            transform:
                                maxIsVisible > i
                                    ? "none"
                                    : mapDirectionToCss[direction],
                            opacity: maxIsVisible > i ? 1 : 0,
                        }}
                    >
                        {child}
                    </ChildTag>
                );
            })}
        </WrapperTag>
    );
}
