import "./_link-text.scss";

export interface IImiLinkTextProps {
    prefix?: string;
    linkText: string;
    suffix?: string;
    href: string;
}

export const ImiLinkText: React.FC<IImiLinkTextProps> = ({
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
