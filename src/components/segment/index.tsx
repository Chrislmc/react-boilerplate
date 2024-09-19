import { convertRemToPx } from "@/utils/css-helper";
import useWindowSize from "@/utils/hooks/useWindowSize";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import "./_segment.scss";

interface Props<T> {
    options: { key: T; text: string }[];
    selectedKey: T;
    setSelectedKey: Dispatch<SetStateAction<T>>;
}

export const Segment = <T extends string>({
    options,
    selectedKey,
    setSelectedKey,
}: Props<T>) => {
    const [activeBorderWidth, setActiveBorderWidth] = useState(0);
    const [activeBorderLeft, setActiveBorderLeft] = useState(0);
    const { isMobile, isTablet } = useWindowSize();

    /* in rem, gap between segments, refer to ._segment css */
    const segmentGap = useMemo(() => {
        if (isMobile) {
            return 0;
        } else if (isTablet) {
            return 0;
        } else {
            return 1.875;
        }
    }, [isMobile, isTablet]);

    const activeIndex = options.findIndex(
        (option) => option.key === selectedKey
    );

    const onResize = useCallback(() => {
        setActiveBorderWidth(
            document.getElementById(`segment-item-${selectedKey}`)
                ?.offsetWidth || 0
        );

        setActiveBorderLeft(
            options.slice(0, activeIndex).reduce(
                (partialSum, reduceOption) =>
                    partialSum +
                        (
                            document.getElementById(
                                `segment-item-${reduceOption.key}`
                            ) as HTMLElement
                        ).offsetWidth || 0,

                0
            ) +
                activeIndex * convertRemToPx(segmentGap)
        );
    }, [activeIndex, options, selectedKey, segmentGap]);

    document.addEventListener("resize", onResize);
    useEffect(() => {
        onResize();
    }, [onResize]);

    return (
        <div className="imi-segment-component">
            <div
                className="segment-active-background"
                style={{ width: activeBorderWidth, left: activeBorderLeft }}
            />
            {options.map((option) => (
                <button
                    key={option.key}
                    className={`segment-btn ${
                        selectedKey === option.key ? "mod__active" : ""
                    }`}
                    id={`segment-item-${option.key}`}
                    onClick={() => setSelectedKey(option.key)}
                    title={option.text}
                >
                    {option.text}
                    <h6
                        className={`segment-desc ${
                            selectedKey === option.key ? "mod__active" : ""
                        }`}
                    ></h6>
                </button>
            ))}
        </div>
    );
};
