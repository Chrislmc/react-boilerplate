import { Icons } from "@/assets/icons";
import { i18nHelper } from "@/utils/i18n-helper";
import { Dispatch, SetStateAction, useState } from "react";
import "./_select.scss";

export interface IOption<T> {
    text: string;
    value: T;
}

export interface IImiSelectProps<T> {
    options: IOption<T>[];
    defaultOption: IOption<T>;
    allOption: IOption<T>;
    selectedOption: IOption<T>[];
    setSelectedOption: Dispatch<SetStateAction<IOption<T>[]>>;
    setInTransition?: Dispatch<SetStateAction<boolean>>;
}

export const ImiSelect = <T extends string>({
    options,
    defaultOption,
    allOption,
    selectedOption,
    setSelectedOption,
    setInTransition,
}: IImiSelectProps<T>) => {
    const t = i18nHelper("shared");

    const [isExpanded, setIsExpanded] = useState(false);

    const [displayText, setDisplayText] = useState(defaultOption.text);

    const parseClassName = (className: string) => {
        return [className, isExpanded ? ["mod__is-expanded"] : []].join(" ");
    };

    const updateDisplayText = (filteredOption: IOption<T>[]) => {
        if (!filteredOption?.length) {
            setDisplayText(defaultOption.text);
        }

        const selectedValues = filteredOption
            .map((option) => option.text)
            .join(", ");

        setDisplayText(selectedValues);
    };

    const onDropdownItemBtnClick = (
        targetOption: IOption<T>,
        isSelected: boolean
    ) => {
        if (setInTransition) setInTransition(true);

        let filteredOption = selectedOption;
        if (isSelected) {
            filteredOption = [
                ...selectedOption.filter(
                    (option) => option.value !== targetOption.value
                ),
            ];

            if (!filteredOption?.length) {
                filteredOption.push(allOption);
            }
        } else {
            if (targetOption === allOption) {
                filteredOption = [targetOption];
            } else {
                filteredOption = options.filter(
                    (option) =>
                        !!selectedOption.find(
                            (selectedOption) =>
                                selectedOption.value === option.value &&
                                selectedOption.value !== allOption?.value
                        ) || option.value === targetOption.value
                );
            }
        }

        updateDisplayText(filteredOption);
        setSelectedOption(filteredOption);

        setTimeout(() => {
            if (setInTransition) setInTransition(false);
        }, 500);
    };

    return (
        <div className="imi-select-component">
            <div className={parseClassName(`dropdown-list-container`)}>
                <div className={`dropdown-list`}>
                    {options.map((option) => {
                        const isSelected =
                            selectedOption
                                .map((item) => item.value)
                                .indexOf(option.value) > -1;

                        return (
                            <div
                                key={`dropdown-item-${option.value}`}
                                className={parseClassName("dropdown-item")}
                            >
                                <button
                                    className={"dropdown-item-btn"}
                                    onClick={() =>
                                        onDropdownItemBtnClick(
                                            option,
                                            isSelected
                                        )
                                    }
                                >
                                    <div
                                        className={`tick-container${
                                            isSelected ? " mod__selected" : ""
                                        }`}
                                    >
                                        <div
                                            className={`inner-tick-container${
                                                isSelected
                                                    ? " mod__selected"
                                                    : ""
                                            }`}
                                        >
                                            <div
                                                className={`tick-icon-container${
                                                    isSelected
                                                        ? " mod__selected"
                                                        : ""
                                                }`}
                                            >
                                                {isSelected && (
                                                    <img src={Icons.Tick} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <p
                                        className={`dropdown-item-desc${
                                            isSelected ? " mod__selected" : ""
                                        }`}
                                    >
                                        {option.text}
                                    </p>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div
                className={parseClassName(`display-container`)}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="filter-btn">
                    <img className="filter-icon" src={Icons.Filter} />
                </div>

                <p className="display-text">
                    {t("filter.filterBy")}
                    <strong>{displayText}</strong>
                </p>

                <div className={parseClassName(`dropdown-btn`)}>
                    <img
                        className={parseClassName(`dropdown-icon`)}
                        src={Icons.Dropdown}
                    />
                </div>
            </div>
        </div>
    );
};
