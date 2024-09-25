import "./_button.scss";

export type IButtonType =
    | "solid"
    | "outline"
    | "round"
    | "text"
    | "outline-rectangle";
export type IButtonSize = "normal" | "padding";

export interface IButtonProps {
    type?: IButtonType;
    size?: IButtonSize;
    text: string;
    onClick?: (e?: any) => void;
    disabled?: boolean;
    colorTheme?: string;
    buttonClassName?: string;
    textClassName?: string;
    downloadFile?: { path: string; name: string };
    externalPath?: string;
    redirectUrl?: string;
}

export const Button: React.FC<IButtonProps> = ({
    type = "solid",
    size = "normal",
    text,
    onClick,
    disabled,
    colorTheme = "primary",
    buttonClassName = "",
    textClassName = "",
    downloadFile,
    externalPath,
    redirectUrl,
}) => {
    return downloadFile || externalPath ? (
        <a
            className={`btn-component type-${type} size-${size} color-${colorTheme} ${buttonClassName}`}
            href={downloadFile?.path || externalPath}
            target="_blank"
        >
            <p
                className={`btn-desc type-${type} color-${colorTheme} ${textClassName}`}
            >
                {text}
            </p>
        </a>
    ) : redirectUrl ? (
        <a
            className={`btn-component type-${type} size-${size} color-${colorTheme} ${buttonClassName}`}
            href={redirectUrl}
            aria-disabled={disabled}
        >
            <p
                className={`btn-desc type-${type} color-${colorTheme} ${textClassName}`}
            >
                {text}
            </p>
        </a>
    ) : (
        <button
            className={`btn-component type-${type} size-${size} color-${colorTheme} ${buttonClassName}`}
            onClick={(e) => {
                onClick && onClick(e);
            }}
            disabled={disabled}
        >
            <p
                className={`btn-desc type-${type} color-${colorTheme} ${textClassName}`}
            >
                {text}
            </p>
        </button>
    );
};
