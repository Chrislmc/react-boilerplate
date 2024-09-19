import "./_containerX.scss";

type Props = React.FC<{
    rightOnly?: boolean;
    leftOnly?: boolean;
    children: React.ReactNode;
}>;

export const ContainerX: Props = ({ rightOnly, leftOnly, children }) => {
    return (
        <div
            className={`container-x${rightOnly ? " mod__right-only" : ""}${
                leftOnly ? " mod__left-only" : ""
            }`}
        >
            {children}
        </div>
    );
};
