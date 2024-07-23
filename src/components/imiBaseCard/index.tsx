import { ReactNode, forwardRef } from "react";
import "./_base-card.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    shadow?: boolean;
    border?: boolean;
    hoverEffect?: boolean;
}

export const ImiBaseCard = forwardRef<HTMLDivElement, Props>(
    ({ children, shadow, border, hoverEffect, ...props }, ref) => {
        return (
            <div
                className={`imi-card-component${shadow ? " mod__shadow" : ""}${
                    border ? " mod__border" : ""
                }${hoverEffect ? " mod__hover-effect" : ""}`}
                {...props}
                ref={ref}
            >
                {children}
            </div>
        );
    }
);
