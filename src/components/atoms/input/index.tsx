import { Icons } from "@/assets/icons";
import { i18nHelper } from "@/utils/i18n-helper";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import "./_input.scss";

export interface IInputProps {
    placeholder: string;
    value?: string;
    setValue?: Dispatch<SetStateAction<string>>;
}

export const Input: React.FC<IInputProps> = ({
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
            <div className="search-btn" onClick={() => onSearchIconClick()}>
                <img className="search-icon" src={Icons.Search} />
            </div>

            <input
                ref={inputRef}
                placeholder={t(placeholder)}
                value={inputValue}
                onChange={onInputChange}
                className={`${value?.length ? " mod__with-value" : ""}`}
            />
        </div>
    );
};
