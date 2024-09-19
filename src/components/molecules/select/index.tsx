import { Icons } from "@/assets/icons";
import { i18nHelper } from "@/utils/i18n-helper";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { CheckBox, IOption } from "../molecules/checkBox";
import "./_select.scss";

export interface ISelectProps<T> {
    options: IOption<T>[];
    defaultOption: IOption<T>;
    allOption: IOption<T>;
    selectedOption: IOption<T>[];
    setSelectedOption: Dispatch<SetStateAction<IOption<T>[]>>;
    setInTransition?: Dispatch<SetStateAction<boolean>>;
}

export const Select = <T extends string>({
    options,
    defaultOption,
    allOption,
    selectedOption,
    setSelectedOption,
    setInTransition,
}: ISelectProps<T>) => {
    const t = i18nHelper("shared");

    const selectComponentRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [displayText, setDisplayText] = useState(defaultOption.text);

    useEffect(() => {
        if (selectComponentRef?.current) {
            selectComponentRef?.current.addEventListener("focusout", (e) => {
                if (
                    !(e.relatedTarget as HTMLDivElement)?.closest(
                        ".select-component"
                    )
                ) {
                    setIsExpanded(false);
                }
            });
        }
    }, []);
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

    const onClickDisplayContainer = () => {
        if (!isExpanded && selectComponentRef?.current) {
            selectComponentRef?.current.focus();
        }
        setIsExpanded(!isExpanded);
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
        <div className="select-component" ref={selectComponentRef}>
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
                                <CheckBox
                                    option={option}
                                    isSelected={isSelected}
                                    onClick={onDropdownItemBtnClick}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div
                className={parseClassName(`display-container`)}
                onClick={onClickDisplayContainer}
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
