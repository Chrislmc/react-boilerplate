import "./_link-text.scss";

export interface ILinkTextProps {
    prefix?: string;
    linkText: string;
    suffix?: string;
    href: string;
}

export const LinkText: React.FC<ILinkTextProps> = ({
    prefix,
    linkText,
    suffix,
    href,
}) => {
    return (
        <span className="imi-link-text-component">
            {prefix}
            <a href={href}>
                <span>{linkText}</span>
            </a>
            {suffix}
        </span>
    );
};
