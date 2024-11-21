import { Select } from "@/components/molecules/select";

export const SelectSample = () => {
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
            <Select multiSelect={false} options={selectConstant} />
            <Select
                multiSelect={true}
                options={selectConstant}
                allOption={selectConstant[0]}
            />
        </div>
    );
};
