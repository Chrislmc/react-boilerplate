import { Select } from "@/components/molecules/select";
import { useState } from "react";

export const SelectSample = () => {
    const [selectedOption, setSelectedOption] = useState([
        {
            text: "All",
            value: "all",
        },
    ]);

    const selectConstant = [
        {
            text: "All",
            value: "all",
        },
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

    return (
        <div style={{ height: "12.5rem" }}>
            <Select
                options={selectConstant}
                defaultOption={selectConstant[0]}
                allOption={selectConstant[0]}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
        </div>
    );
};
