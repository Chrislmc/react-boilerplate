import { OurHealingVisionComponent } from "@/assets/icons/others/our-healing-vision.component";
import { DescSection } from "@/components/descSection";
import { Segment } from "@/components/molecules/segment";
import { convertRemToPx } from "@/utils/css-helper";
import useWindowSize from "@/utils/hooks/useWindowSize";
import { i18nHelper } from "@/utils/i18n-helper";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    IOurHealingVision,
    ourHealingVisionColor,
    ourHealingVisionTabList,
} from "./ourHealingVisionPageConstant";

export const OurHealingVisionPageDescSection = () => {
    const t = i18nHelper("others");
    const TabRef = useRef<HTMLDivElement>(null);

    const [activeSection, setActiveSection] = useState<IOurHealingVision>(
        IOurHealingVision.OVERVIEW
    );

    const segmentOptions = ourHealingVisionTabList.map((section) => ({
        key: section.id,
        text: t(section.label),
    }));

    const activeContent = ourHealingVisionTabList.find(
        (section) => activeSection === section.id
    );
    const { isMobile, isTablet } = useWindowSize();
    const segmentGap = useMemo(() => {
        if (isMobile) {
            return 0;
        } else if (isTablet) {
            return 0;
        } else {
            return 1.875;
        }
    }, [isMobile, isTablet]);

    const activeIndex = segmentOptions.findIndex(
        (option) => option.key === activeSection
    );

    useEffect(() => {
        /* in rem, gap between segments, refer to ._segment css */
        const scrollLeft =
            segmentOptions.slice(0, activeIndex).reduce(
                (partialSum, reduceOption) =>
                    partialSum +
                        (
                            document.getElementById(
                                `segment-item-${reduceOption.key}`
                            ) as HTMLElement
                        ).offsetWidth || 0,

                0
            ) +
            activeIndex * convertRemToPx(segmentGap);

        setTimeout(() => {
            TabRef.current?.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }, 200);
    }, [activeIndex, activeSection, segmentGap, segmentOptions]);

    return (
        <DescSection
            header={t("ourHealingVision.header")}
            customBottomComponent={
                <div className="custom-bottom-component">
                    <div className="healing-vision-image-container">
                        <OurHealingVisionComponent
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                        />

                        <div className="image-text">
                            <p>{t("ourHealingVision.clickOn")}</p>
                            <h3>{t("ourHealingVision.keyFactor")}</h3>
                        </div>
                    </div>

                    <div className="content-container">
                        <div className="swiper-container" ref={TabRef}>
                            <Segment<IOurHealingVision>
                                options={segmentOptions}
                                selectedKey={activeSection}
                                setSelectedKey={setActiveSection}
                            />
                        </div>

                        <div className={`detail-container`}>
                            {activeContent?.header && (
                                <h4
                                    className="tab-content-header"
                                    style={{
                                        color: ourHealingVisionColor[
                                            activeContent.id
                                        ],
                                    }}
                                >
                                    {t(activeContent.header)}
                                </h4>
                            )}

                            <div className="desc-list">
                                {activeContent?.descs.map((desc, i) => (
                                    <p
                                        key={`desc-${i}`}
                                        className="detail-desc"
                                    >
                                        {t(desc)}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
};
