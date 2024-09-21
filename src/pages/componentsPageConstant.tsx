import { Images } from "@/assets/images";
import { BaseCard } from "@/components/atoms/baseCard";
import { BoldText } from "@/components/atoms/boldText";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { LinkText } from "@/components/atoms/linkText";
import { NumberInput } from "@/components/atoms/numberInput";
import { SectionHeader } from "@/components/atoms/sectionHeader";
import { Tab } from "@/components/atoms/tab";
import { Text } from "@/components/atoms/text";
import { Accordion } from "@/components/molecules/accordion";
import { Breadcrumb } from "@/components/molecules/breadcrumb";
import { CardWithImageContent } from "@/components/molecules/cardWithImageContent";
import { GradientBanner } from "@/components/molecules/gradientBanner";
import { VideoPlayer } from "@/components/molecules/videoPlayer";
import { CheckBoxSample } from "./CheckBoxSample";
import { SegmentSample } from "./SegmentSample";
import { SelectSample } from "./SelectSample";
import { SliderSample } from "./SliderSample";
import { SwiperSample } from "./SwiperSample";

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
                    <div className="component-wrapper">
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
                    </div>
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
                    <div className="component-wrapper">
                        <Button text={"Sample Button"} />
                        <Button
                            text={"Sample Button (outline)"}
                            type="outline"
                        />
                        <Button text={"EN"} type="round" />
                        <Button text={"Sample Button (text)"} type="text" />
                    </div>
                ),
            },
            {
                id: "checkBox",
                text: "Check Box",
                component: <CheckBoxSample />,
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
                component: (
                    <div className="component-wrapper">
                        <NumberInput />
                    </div>
                ),
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
            {
                id: "accordion",
                text: "Accordion",
                component: (
                    <div style={{ width: "31.25rem" }}>
                        <Accordion
                            content={[
                                {
                                    header: "Accordion 1",
                                    details: [{ desc: "Sample content" }],
                                },
                                {
                                    header: "Accordion2",
                                    details: [
                                        {
                                            prefix: "This is a ",
                                            boldText: "bold",
                                            suffix: " text",
                                        },
                                    ],
                                },
                            ]}
                        />
                    </div>
                ),
            },
            {
                id: "breadcrumb",
                text: "Breadcrumb",
                component: (
                    <div style={{ height: "2.417rem", width: "100%" }}>
                        <Breadcrumb customRouteDesc={"Components display"} />
                    </div>
                ),
            },
            {
                id: "cardWithImageContent",
                text: "Card With Image Content",
                component: (
                    <div
                        className="component-wrapper"
                        style={{ width: "25rem" }}
                    >
                        <CardWithImageContent
                            imgUrl={Images.SampleImage1}
                            title={"What is Lorem Ipsum?"}
                            desc={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
                            }
                        />
                    </div>
                ),
            },
            {
                id: "gradientBanner",
                text: "Gradient Banner",
                component: (
                    <div style={{ height: "25rem" }}>
                        <GradientBanner
                            imgUrl={Images.SampleImage2}
                            colorTheme={"primary"}
                            imgPosition={"right"}
                            content={[
                                {
                                    header: "Visit Jeju!",
                                    subheader: "Explore the beauty of Jeju",
                                    descList: [
                                        "Jeju is South Korea's largest island",
                                        "Historically named as Dongyeongju, Jeju is the treasure of Korea",
                                        "With stunning scenery and endless coastal line",
                                    ],
                                },
                            ]}
                        />
                    </div>
                ),
            },
            {
                id: "segment",
                text: "Segment",
                component: <SegmentSample />,
            },
            {
                id: "select",
                text: "Select",
                component: <SelectSample />,
            },
            { id: "slider", text: "Slider", component: <SliderSample /> },
            {
                id: "swiper",
                text: "Swiper",
                component: <SwiperSample />,
            },
            {
                id: "videoPlayer",
                text: "Video Player",
                component: (
                    <VideoPlayer
                        url={"https://www.youtube.com/watch?v=g-TTsdsPJqs"}
                    />
                ),
            },
        ],
    },
];
