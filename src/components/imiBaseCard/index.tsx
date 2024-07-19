import { ReactNode } from "react";
import "./_base-card.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    shadow?: boolean;
    border?: boolean;
}

export const ImiBaseCard = ({ children, shadow, border, ...props }: Props) => {
    return (
        <div
            className={`imi-card-component ${shadow ? "mod__shadow" : ""} ${
                border ? "mod__border" : ""
            }`}
            {...props}
        >
            {children}
        </div>
    );
};
