import { OurHealingVisionComponent } from "@/assets/icons/others/our-healing-vision.component";
import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import {
    IOurHealingVision,
    ourHealingVisionColor,
    ourHealingVisionTabList,
} from "./ourHealingVisionPageConstant";

export const OurHealingVisionPageDescSection = () => {
    const t = i18nHelper("others");

    const [activeSection, setActiveSection] = useState<IOurHealingVision>(
        IOurHealingVision.OVERVIEW
    );

    const activeContent = ourHealingVisionTabList.find(
        (section) => activeSection === section.id
    );

    const onButtonClick = (
        id: IOurHealingVision,
        e?: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        console.log(e?.target);
        if (e?.target)
            (e?.target as HTMLDivElement).scrollIntoView({
                behavior: "smooth",
            });

        if (activeSection === id) {
            setActiveSection(IOurHealingVision.OVERVIEW);
        } else {
            setActiveSection(id);
        }
    };

    return (
        <ImiDescSection
            header={t("ourHealingVision.header")}
            customBottomComponent={
                <div className="custom-bottom-component">
                    <div className="healing-vision-image-container">
                        <OurHealingVisionComponent
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                        />
                    </div>

                    <div className="content-container">
                        <div className="swiper-container">
                            {/* <ImiSwiper
                                cardLists={}
                                slidesPerView={"auto"}
                                spaceBetween={convertRemToPx(1.875)}
                                // freeMode={true}
                                // scrollbar={true}
                                // mousewheel={true}
                                // modules={[FreeMode, Scrollbar, Mousewheel]}
                            /> */}
                            {ourHealingVisionTabList.map((section) => {
                                const isActive = activeSection === section.id;
                                return (
                                    <ImiButton
                                        key={`tab-${section.id}`}
                                        text={t(section.label)}
                                        size="padding"
                                        buttonClassName={
                                            isActive ? `mod__active` : ""
                                        }
                                        textClassName={
                                            isActive ? `mod__active` : ""
                                        }
                                        onClick={(e) =>
                                            onButtonClick(section.id, e)
                                        }
                                    />
                                );
                            })}
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
