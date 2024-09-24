import "./_section-label.scss";

interface Props {
    text: string;
    type?: "section" | "input";
}

export const Label: React.FC<Props> = ({ text, type = "section" }) => {
    return <h5 className={`label-component ${type}-label`}>{text}</h5>;
};
