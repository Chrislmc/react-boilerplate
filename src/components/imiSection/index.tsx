import "./_section.scss";

interface Props {
    className: string;
    children: React.ReactNode;
}

export const ImiSection: React.FC<Props> = ({ className, children }) => {
    return (
        <section className={`imi-section-component ${className}`}>
            {children}
        </section>
    );
};
