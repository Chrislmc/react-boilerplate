import { useState } from "react";
import "./_number-input.scss";

interface Props {
    min?: number;
    max?: number;
    step?: number;
}

export const ImiNumberInput: React.FC<Props> = ({
    min = 0,
    max = 100,
    step = 1,
}) => {
    const [value, setValue] = useState(min);
    const disableMinBtn = value === min;
    const disableMaxBtn = value === max;
    console.log(min, max, value);

    return (
        <div className="imi-number-input-component">
            <button
                className={`button-container minus`}
                disabled={disableMinBtn}
                onClick={() => setValue(value - step)}
            />
            <input
                type="number"
                min={min}
                max={max}
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button
                className={`button-container add`}
                disabled={disableMaxBtn}
                onClick={() => setValue(value + step)}
            />
        </div>
    );
};
