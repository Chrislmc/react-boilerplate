import "./_section-container-y.scss";

interface Props {
    size?: "normal" | "small";
    children: React.ReactNode;
}

export const SectionContainerY: React.FC<Props> = ({
    size = "normal",
    children,
}) => {
    return (
        <div className={`section-container-y mod__size-${size}`}>
            {children}
        </div>
    );
};
