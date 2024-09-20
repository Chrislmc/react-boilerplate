import "./_section-label.scss";

interface Props {
    text: string;
}

export const SectionLabel: React.FC<Props> = (props: Props) => {
    return <h5 className={`section-label-component`}>{props.text}</h5>;
};
