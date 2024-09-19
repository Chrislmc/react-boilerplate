import "./_bold-text.scss";

export interface IBoldTextProps {
    prefix?: string;
    boldText: string;
    suffix?: string;
}

export const BoldText: React.FC<IBoldTextProps> = ({
    prefix,
    boldText,
    suffix,
}) => {
    return (
        <span className="bold-text-component">
            {prefix}
            <strong>{boldText}</strong>
            {suffix}
        </span>
    );
};
