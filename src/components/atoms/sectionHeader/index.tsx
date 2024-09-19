import "./_section-header.scss";

interface Props {
    header: string;
    style?: "normal" | "subsection" | "small-subsection";
}

export const SectionHeader: React.FC<Props> = (props: Props) => {
    let mod = "";
    switch (props?.style) {
        case "subsection":
            mod = " mod__subsection";
            break;
        case "small-subsection":
            mod = " mod__small-subsection";
            break;
        case "normal":
        default:
            mod = "";
            break;
    }

    return (
        <h1 className={`section-header-component section-header-h1${mod}`}>
            {props.header.toUpperCase()}
        </h1>
    );
};
