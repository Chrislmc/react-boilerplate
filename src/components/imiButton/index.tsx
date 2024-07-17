import { useNavigate } from "react-router-dom";
import "./_button.scss";

export type IImiButtonType = "solid" | "outline" | "round" | "text";

export interface IImiButtonProps {
    type?: IImiButtonType;
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    colorTheme?: string;
    buttonClassName?: string;
    textClassName?: string;
    downloadFile?: { path: string; name: string };
    externalPath?: string;
    redirectUrl?: string;
}

export const ImiButton: React.FC<IImiButtonProps> = ({
    type = "solid",
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
            className={`imi-btn-component type-${type} color-${colorTheme} ${buttonClassName}`}
            href={downloadFile?.path || externalPath}
            target="_blank"
        >
            <p
                className={`imi-btn-desc type-${type} color-${colorTheme} ${textClassName}`}
            >
                {text}
            </p>
        </a>
    ) : (
        <button
            className={`imi-btn-component type-${type} color-${colorTheme} ${buttonClassName}`}
            onClick={() => {
                redirectUrl && navigator(redirectUrl);
                onClick && onClick();
            }}
            disabled={disabled}
        >
            <p
                className={`imi-btn-desc type-${type} color-${colorTheme} ${textClassName}`}
            >
                {text}
            </p>
        </button>
    );
};
