import { Dispatch, SetStateAction, useState } from "react";
import "./_tab.scss";

interface Props<T> {
    options: { text: string; value: T }[];
    activeTab?: string;
    setActiveTab?: Dispatch<SetStateAction<T>>;
    onTabClick?: (value: T) => void;
    disabled?: boolean;
}

export const Tab = <T extends string>({
    options,
    activeTab,
    setActiveTab,
    onTabClick,
    disabled,
}: Props<T>) => {
    const [tabState, setTabState] = useState(activeTab || options[0].value);

    const onTabItemClick = (value: T) => {
        setTabState(value);

        if (onTabClick) {
            onTabClick(value);
            return;
        }

        if (setActiveTab) setActiveTab(value);
    };

    return (
        <div className="tab-component">
            {options.map((option, i) => (
                <div
                    key={`tab-${i}`}
                    className={`tab-item${
                        tabState === option.value ? " mod__active" : ""
                    }${disabled ? " mod__disabled" : ""}`}
                >
                    <button
                        onClick={() => onTabItemClick(option.value)}
                        disabled={disabled}
                        title={option.text}
                    >
                        {option.text}

                        <div className="tab-item-decorator" />
                    </button>
                </div>
            ))}
        </div>
    );
};
