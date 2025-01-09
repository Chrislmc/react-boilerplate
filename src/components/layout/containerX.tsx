import { forwardRef } from "react";
import "./_containerX.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    rightOnly?: boolean;
    leftOnly?: boolean;
    ref?: React.RefObject<Element>;
    className?: string;
    children: React.ReactNode;
}

export const ContainerX = forwardRef<HTMLDivElement, Props>(
    ({ rightOnly, leftOnly, className, children }, ref) => {
        return (
            <div
                ref={ref || null}
                className={`container-x${rightOnly ? "mod__right-only" : ""} ${
                    leftOnly ? "mod__left-only" : ""
                } ${className}`}
            >
                {children}
            </div>
        );
    }
);
