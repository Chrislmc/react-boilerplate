import { i18nHelper } from "@/utils/i18n-helper";
import {
    ChangeEvent,
    Dispatch,
    ReactElement,
    SetStateAction,
    useRef,
    useState,
} from "react";
import "./_input.scss";

export interface IInputProps {
    prefixIcon?: ReactElement;
    suffixIcon?: ReactElement;
    placeholder: string;
    value?: string;
    setValue?: Dispatch<SetStateAction<string>>;
}

export const Input: React.FC<IInputProps> = ({
    prefixIcon,
    suffixIcon,
    placeholder,
    value,
    setValue,
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

        if (setValue) setValue(e.target.value);
    };

    return (
        <div className="input-component">
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
