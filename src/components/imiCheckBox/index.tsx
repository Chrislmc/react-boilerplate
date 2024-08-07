import { Icons } from "@/assets/icons";
import "./_check-box.scss";

export interface IOption<T> {
    text: string;
    value: T;
}

interface Props<T> {
    option: IOption<T>;
    isSelected: boolean;
    onClick?: (option: IOption<T>, isSelected: boolean) => void;
}

export const ImiCheckBox = <T extends string>({
    option,
    isSelected,
    onClick,
}: Props<T>) => {
    const onCheckBoxClick = () => {
        if (onClick) onClick(option, isSelected);
    };

    return (
        <button className={"imi-check-box-component"} onClick={onCheckBoxClick}>
            <div
                className={`tick-container${
                    isSelected ? " mod__selected" : ""
                }`}
            >
                <div
                    className={`tick-icon-container${
                        isSelected ? " mod__selected" : ""
                    }`}
                >
                    {isSelected && <img src={Icons.Tick} />}
                </div>
            </div>
            <p className={`label${isSelected ? " mod__selected" : ""}`}>
                {option.text}
            </p>
        </button>
    );
};
