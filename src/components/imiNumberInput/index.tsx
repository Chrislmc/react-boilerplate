import { Dispatch, SetStateAction, useState } from "react";
import "./_number-input.scss";

interface Props {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    setValue?: Dispatch<SetStateAction<number>>;
}

export const ImiNumberInput: React.FC<Props> = ({
    min = 0,
    max = 100,
    step = 1,
    value,
    setValue,
}) => {
    const [inputValue, setInputValue] = useState(value || min);
    const disableMinBtn = inputValue === min;
    const disableMaxBtn = inputValue === max;

    const onChange = (e: number) => {
        if (setValue) setValue(e);
        setInputValue(e);
    };

    return (
        <div className="imi-number-input-component">
            <button
                className={`button-container minus`}
                disabled={disableMinBtn}
                onClick={() => onChange(inputValue - step)}
            />
            <input
                type="number"
                min={min}
                max={max}
                value={inputValue}
                onChange={(e) => onChange(parseInt(e.target.value))}
            />
            <button
                className={`button-container add`}
                disabled={disableMaxBtn}
                onClick={() => onChange(inputValue + step)}
            />
        </div>
    );
};
