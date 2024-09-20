export type IComponent = {
    id: string;
    text: string;
    children?: IComponent[];
};

export const componentsHierarchy = [
    {
        id: "atoms",
        text: "Atoms",
        children: [
            { id: "baseCard", text: "Base Card" },
            { id: "boldText", text: "Bold Text" },
            { id: "button", text: "Button" },
            { id: "input", text: "Input" },
            { id: "linkText", text: "Link Text" },
            { id: "numberInput", text: "Number Input" },
            { id: "sectionHeader", text: "Section Header" },
            { id: "tab", text: "Tab" },
            { id: "text", text: "Text" },
        ],
    },
    {
        id: "molecules",
        text: "Molecules",
        children: [
            { id: "accordion", text: "Accordion" },
            { id: "breadcrumb", text: "Breadcrumb" },
            { id: "cardWithImageContent", text: "Card With Image Content" },
            { id: "checkBox", text: "Check Box" },
            { id: "gradientBanner", text: "Gradient Banner" },
            { id: "segment", text: "Segment" },
            { id: "select", text: "Select" },
            { id: "slider", text: "Slider" },
            { id: "swiper", text: "Swiper" },
            { id: "videoPlayer", text: "Video Player" },
        ],
    },
];
