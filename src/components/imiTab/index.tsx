import { Dispatch, SetStateAction } from "react";
import "./_tab.scss";

interface Props<T> {
    options: { text: string; value: T }[];
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<T>>;
}

export const ImiTab = <T extends string>({
    options,
    activeTab,
    setActiveTab,
}: Props<T>) => {
    const onTabItemClick = (value: T) => {
        setActiveTab(value);
    };

    return (
        <div className="imi-tab-component">
            {options.map((option) => (
                <div
                    className={`tab-item${
                        activeTab === option.value ? " mod__active" : ""
                    }`}
                >
                    <button onClick={() => onTabItemClick(option.value)}>
                        <h5 className="tab-text">{option.text}</h5>

                        <div className="tab-item-decorator" />
                    </button>
                </div>
            ))}
        </div>
    );
};
