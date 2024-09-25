import { i18nHelper } from "@/utils/i18n-helper";
import { ChangeEvent, ReactElement, useRef, useState } from "react";
import "./_input.scss";

export interface IInputProps {
    outline?: boolean;
    prefixIcon?: ReactElement;
    suffixIcon?: ReactElement;
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input: React.FC<IInputProps> = ({
    outline,
    prefixIcon,
    suffixIcon,
    placeholder,
    value,
    onChange,
}) => {
    const [inputValue, setInputValue] = useState(value || "");
    const t = i18nHelper("shared");
    const inputRef = useRef<HTMLInputElement>(null);

    const onSearchIconClick = () => {
        if (inputRef?.current) {
            inputRef.current.focus();
        }
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);

        if (onChange) onChange(e.target.value);
    };

    return (
        <div className={`input-component ${outline ? "mod__outline" : ""}`}>
            {prefixIcon && (
                <div
                    className="input-icon prefix-icon"
                    onClick={() => onSearchIconClick()}
                >
                    {prefixIcon}
                </div>
            )}

            <input
                ref={inputRef}
                placeholder={t(placeholder)}
                value={inputValue}
                onChange={onInputChange}
                className={`${value?.length ? " mod__with-value" : ""}`}
            />

            {suffixIcon && (
                <div
                    className="input-icon suffix-icon"
                    onClick={() => onSearchIconClick()}
                >
                    {suffixIcon}
                </div>
            )}
        </div>
    );
};
