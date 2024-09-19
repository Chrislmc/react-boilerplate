import { useNavigate } from "react-router-dom";
import "./_button.scss";

export type IImiButtonType = "solid" | "outline" | "round" | "text";
export type IImiButtonSize = "normal" | "padding";

export interface IButtonProps {
    type?: IImiButtonType;
    size?: IImiButtonSize;
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
    const navigator = useNavigate();

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
                redirectUrl && navigator(redirectUrl);
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
