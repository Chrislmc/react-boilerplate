import { BaseCard } from "@/components/atoms/baseCard";
import { BoldText } from "@/components/atoms/boldText";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { LinkText } from "@/components/atoms/linkText";
import { NumberInput } from "@/components/atoms/numberInput";
import { SectionHeader } from "@/components/atoms/sectionHeader";
import { Tab } from "@/components/atoms/tab";
import { Text } from "@/components/atoms/text";

export type IComponent = {
    id: string;
    text: string;
    component?: JSX.Element;
    children?: IComponent[];
};

export const componentsHierarchy: IComponent[] = [
    {
        id: "atoms",
        text: "Atoms",
        children: [
            {
                id: "baseCard",
                text: "Base Card",
                component: (
                    <>
                        <BoldText
                            boldText={"Sample Base Card with border and shadow"}
                        />
                        <BaseCard
                            shadow
                            border
                            children={
                                <>
                                    <div
                                        style={{
                                            height: "300px",
                                            width: "200px",
                                        }}
                                    />
                                </>
                            }
                        />
                    </>
                ),
            },
            {
                id: "boldText",
                text: "Bold Text",
                component: <BoldText boldText={"Sample Bold Text"} />,
            },
            {
                id: "button",
                text: "Button",
                component: (
                    <>
                        <Button text={"Sample Button"} />
                        <Button
                            text={"Sample Button (outline)"}
                            type="outline"
                        />
                        <Button text={"EN"} type="round" />
                        <Button text={"Sample Button (text)"} type="text" />
                    </>
                ),
            },
            {
                id: "input",
                text: "Input",
                component: <Input placeholder={"Enter..."} />,
            },
            {
                id: "linkText",
                text: "Link Text",
                component: <LinkText linkText={"Sample Link Text"} href={""} />,
            },
            {
                id: "numberInput",
                text: "Number Input",
                component: <NumberInput />,
            },
            {
                id: "sectionHeader",
                text: "Section Header",
                component: <SectionHeader header={"Sample Section Header"} />,
            },
            {
                id: "tab",
                text: "Tab",
                component: (
                    <Tab
                        options={[
                            { text: "Tab1", value: "tab1" },
                            { text: "Tab2", value: "tab2" },
                            { text: "Tab3", value: "tab3" },
                        ]}
                    />
                ),
            },
            {
                id: "text",
                text: "Text",
                component: <Text desc="Sample Text" />,
            },
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
