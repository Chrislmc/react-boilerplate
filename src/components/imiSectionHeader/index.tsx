interface Props {
    header: string;
}

export const ImiSectionHeader: React.FC<Props> = (props: Props) => {
    return (
        <h1 className={`imi-section-header-component imi-section-header-h1`}>
            {props.header.toUpperCase()}
        </h1>
    );
};
