import "./_bold-text.scss";

export interface IImiBoldTextProps {
    prefix?: string;
    boldText: string;
    suffix?: string;
}

export const ImiBoldText: React.FC<IImiBoldTextProps> = ({
    prefix,
    boldText,
    suffix,
}) => {
    return (
        <span className="imi-bold-text-component">
            {prefix}
            <strong>{boldText}</strong>
            {suffix}
        </span>
    );
};
