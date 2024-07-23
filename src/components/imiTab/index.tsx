import { Dispatch, SetStateAction } from "react";
import "./_tab.scss";

interface Props<T> {
    options: { text: string; value: T }[];
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<T>>;
    onTabClick?: (value: T) => void;
    disabled?: boolean;
}

export const ImiTab = <T extends string>({
    options,
    activeTab,
    setActiveTab,
    onTabClick,
    disabled,
}: Props<T>) => {
    const onTabItemClick = (value: T) => {
        if (onTabClick) {
            onTabClick(value);
            return;
        }

        setActiveTab(value);
    };

    return (
        <div className="imi-tab-component">
            {options.map((option) => (
                <div
                    className={`tab-item${
                        activeTab === option.value ? " mod__active" : ""
                    }${disabled ? " mod__disabled" : ""}`}
                >
                    <button
                        onClick={() => onTabItemClick(option.value)}
                        disabled={disabled}
                    >
                        <h5 className="tab-text">{option.text}</h5>

                        <div className="tab-item-decorator" />
                    </button>
                </div>
            ))}
        </div>
    );
};
