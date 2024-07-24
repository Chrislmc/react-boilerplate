import "./_section-header.scss";

interface Props {
    header: string;
    style?: "normal" | "subsection";
}

export const ImiSectionHeader: React.FC<Props> = (props: Props) => {
    return (
        <h1
            className={`imi-section-header-component imi-section-header-h1${
                props?.style === "subsection" ? " mod__subsection" : ""
            }`}
        >
            {props.header.toUpperCase()}
        </h1>
    );
};
