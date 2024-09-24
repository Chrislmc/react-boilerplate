import { Icons } from "@/assets/icons";
import { i18nHelper } from "@/utils/i18n-helper";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { CheckBox, IOption } from "../../atoms/checkBox";
import "./_select.scss";

type ISelectProps<T> = {
    multiSelect: boolean;
    placeholder?: string;
    options: IOption<T>[];
    allOption?: IOption<T>;
};

export const Select = <T extends string>({
    multiSelect = false,
    options,
    placeholder,
    allOption,
}: ISelectProps<T>) => {
    const [value, setValue] = useState<IOption<T> | IOption<T>[] | null>(
        multiSelect ? [] : null
    );
    const [displayText, setDisplayText] = useState<string>(
        placeholder || options[0].text || "Select..."
    );

    if (!multiSelect) {
        return (
            <SingleSelect
                setDisplayText={setDisplayText}
                setValue={
                    setValue as Dispatch<SetStateAction<IOption<T> | null>>
                }
                options={options}
                value={value as IOption<T> | null}
                displayText={displayText}
            />
        );
    } else {
        return (
            <MultiSelect
                setDisplayText={setDisplayText}
                setValue={setValue as Dispatch<SetStateAction<IOption<T>[]>>}
                options={options}
                value={value as IOption<T>[]}
                displayText={displayText}
                allOption={allOption}
            />
        );
    }
};

interface ISingleSelectProps<T>
    extends Omit<IBaseSelectProps<T>, "onOptionItemClick"> {
    setDisplayText: Dispatch<SetStateAction<string>>;
    setValue: Dispatch<SetStateAction<IOption<T> | null>>;
}

const SingleSelect = <T extends string>({
    setValue: setSelectedOption,
    setDisplayText,
    ...props
}: ISingleSelectProps<T>) => {
    const updateDisplayText = (filteredOption: null | IOption<T>) => {
        const selectedValues = filteredOption ? filteredOption.text : "";

        setDisplayText(selectedValues);
    };

    const onOptionItemClick = (
        targetOption: IOption<T>,
        isSelected: boolean
    ) => {
        // if (setInTransition) setInTransition(true);

        const filteredOption = isSelected ? null : targetOption;

        updateDisplayText(filteredOption);
        setSelectedOption(filteredOption);

        // setTimeout(() => {
        //     if (setInTransition) setInTransition(false);
        // }, 500);
    };

    return <BaseSelect {...props} onOptionItemClick={onOptionItemClick} />;
};

interface IMultiSelectProps<T>
    extends Omit<IBaseSelectProps<T>, "value" | "onOptionItemClick"> {
    allOption?: IOption<T>;
    setDisplayText: Dispatch<SetStateAction<string>>;
    value: IOption<T>[];
    setValue: Dispatch<SetStateAction<IOption<T>[]>>;
}

const MultiSelect = <T extends string>({
    value: selectedOption,
    setValue: setSelectedOption,
    setDisplayText,
    options,
    allOption,
    ...props
}: IMultiSelectProps<T>) => {
    const updateDisplayText = (filteredOption: null | IOption<T>[]) => {
        if (!filteredOption?.length) {
            setDisplayText(options[0]?.text || "Select...");
        }

        const selectedValues = (filteredOption as IOption<T>[])
            .map((option) => option.text)
            .join(", ");

        setDisplayText(selectedValues);
    };

    const onOptionItemClick = (
        targetOption: IOption<T>,
        isSelected: boolean
    ) => {
        // if (setInTransition) setInTransition(true);

        let filteredOption: IOption<T>[] = selectedOption;

        if (isSelected) {
            filteredOption = [
                ...(selectedOption as IOption<T>[]).filter(
                    (option) => option.value !== targetOption.value
                ),
            ];

            if (!filteredOption?.length && allOption) {
                filteredOption.push(allOption);
            }
        } else {
            if (targetOption === allOption) {
                filteredOption = [targetOption];
            } else {
                filteredOption = options.filter(
                    (option) =>
                        !!(selectedOption as IOption<T>[]).find(
                            (sOption) =>
                                sOption.value === option.value &&
                                sOption.value !== allOption?.value
                        ) || option.value === targetOption.value
                );
            }
        }

        updateDisplayText(filteredOption);
        setSelectedOption(filteredOption);

        // setTimeout(() => {
        //     if (setInTransition) setInTransition(false);
        // }, 500);
    };

    return (
        <BaseSelect
            {...props}
            onOptionItemClick={onOptionItemClick}
            value={selectedOption}
            options={options}
        />
    );
};

interface IBaseSelectProps<T> {
    displayText: string;
    options: IOption<T>[];
    value: null | IOption<T> | IOption<T>[];
    onOptionItemClick: (targetOption: IOption<T>, isSelected: boolean) => void;
}

const BaseSelect = <T extends string>({
    displayText,
    options,
    value: selectedOption,
    onOptionItemClick,
}: IBaseSelectProps<T>) => {
    const t = i18nHelper("shared");

    const selectComponentRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);

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

    const onClickDisplayContainer = () => {
        if (!isExpanded && selectComponentRef?.current) {
            selectComponentRef?.current.focus();
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="select-component" ref={selectComponentRef}>
            <div className={parseClassName(`dropdown-list-container`)}>
                <div className={`dropdown-list`}>
                    {options?.map((option) => {
                        const isSelected =
                            selectedOption && "value" in selectedOption
                                ? selectedOption?.value === option.value
                                : (selectedOption as IOption<T>[])
                                      ?.map((item) => item.value)
                                      .indexOf(option.value) > -1;

                        return (
                            <div
                                key={`dropdown-item-${option.value}`}
                                className={parseClassName("dropdown-item")}
                            >
                                <CheckBox
                                    option={option}
                                    isSelected={isSelected}
                                    onClick={onOptionItemClick}
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
