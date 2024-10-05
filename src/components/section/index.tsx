import "./_section.scss";

interface Props {
    id?: string;
    className: string;
    children: React.ReactNode;
}

export const Section: React.FC<Props> = ({ id, className, children }) => {
    return (
        <section id={id} className={`section-component ${className}`}>
            {children}
        </section>
    );
};
