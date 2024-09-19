import { Icons } from "@/assets/icons";
import { i18nHelper } from "@/utils/i18n-helper";
import { Dispatch, SetStateAction, useRef } from "react";
import "./_input.scss";

export interface IInputProps {
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

export const Input: React.FC<IInputProps> = ({
    placeholder,
    value,
    setValue,
}) => {
    const t = i18nHelper("shared");
    const inputRef = useRef<HTMLInputElement>(null);

    const onSearchIconClick = () => {
        if (inputRef?.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="imi-input-component">
            <div className="search-btn" onClick={() => onSearchIconClick()}>
                <img className="search-icon" src={Icons.Search} />
            </div>

            <input
                ref={inputRef}
                placeholder={t(placeholder)}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`${value?.length ? " mod__with-value" : ""}`}
            />
        </div>
    );
};
