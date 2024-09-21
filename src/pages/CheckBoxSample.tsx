import { CheckBox, IOption } from "@/components/atoms/checkBox";
import { useState } from "react";

export const CheckBoxSample = () => {
    const [selectedCheckBox, setSelectedCheckBox] = useState("");

    const checkBoxConstant = [
        {
            text: "Option1",
            value: "option1",
        },
        {
            text: "Option2",
            value: "option2",
        },
        {
            text: "Option3",
            value: "option3",
        },
    ];

    const onClickCheckBox = (option: IOption<string>, isSelected: boolean) => {
        if (isSelected) {
            setSelectedCheckBox("");
        } else {
            setSelectedCheckBox(option.value);
        }
    };

    return (
        <>
            {checkBoxConstant.map((option) => (
                <CheckBox
                    option={option}
                    isSelected={option.value === selectedCheckBox}
                    onClick={onClickCheckBox}
                />
            ))}
        </>
    );
};
