import "./_section-container-y.scss";

interface Props {
    children: React.ReactNode;
}

export const SectionContainerY: React.FC<Props> = ({ children }) => {
    return <div className="section-container-y">{children}</div>;
};
