import { Slider } from "@/components/molecules/slider";
import { useState } from "react";

export const SliderSample = () => {
    const [sliderState, setSliderState] = useState([0, 100]);

    return (
        <div style={{ width: "25rem" }}>
            <Slider
                range
                min={0}
                max={1000}
                defaultValue={[0, 100]}
                value={sliderState}
                onChange={(e) => {
                    setSliderState(e as number[]);
                }}
            />
            <div
                className="range-row-container"
                style={{
                    marginTop: "0.25rem",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <span>{`HKD ${sliderState[0]}`}</span>
                <span>{`HKD ${sliderState[1]}`}</span>
            </div>
        </div>
    );
};
