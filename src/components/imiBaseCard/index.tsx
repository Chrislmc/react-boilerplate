import { ReactNode } from "react";
import "./_card.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    shadow?: boolean;
    border?: boolean;
}

export const K4kBaseCard = ({ children, shadow, border, ...props }: Props) => {
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
