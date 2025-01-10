import { convertRemToPx } from "@/utils/css-helper";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
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
    const TabRef = useRef<HTMLDivElement>(null);

    const activeIndex = options.findIndex(
        (option) => option.value === tabState
    );

    const segmentGap = 6.25;

    useEffect(() => {
        /* in rem, gap between segments, refer to ./_tab.scss */
        const scrollLeft =
            options.slice(0, activeIndex).reduce(
                (partialSum, reduceOption) =>
                    partialSum +
                        (
                            document.getElementById(
                                `tab-item-${reduceOption.value}`
                            ) as HTMLElement
                        ).offsetWidth || 0,

                0
            ) +
            activeIndex * convertRemToPx(segmentGap);

        setTimeout(() => {
            TabRef.current?.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }, 200);
    }, [activeIndex, options, segmentGap]);

    const onTabItemClick = (value: T) => {
        setTabState(value);
        console.log("hi");
        if (onTabClick) {
            onTabClick(value);
            return;
        }

        if (setActiveTab) setActiveTab(value);
    };

    return (
        <div className="tab-component" ref={TabRef}>
            {options.map((option, i) => (
                <div
                    key={`tab-${i}`}
                    className={`tab-item${
                        tabState === option.value ? " mod__active" : ""
                    }${disabled ? " mod__disabled" : ""}`}
                    id={`tab-item-${option.value}`}
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
