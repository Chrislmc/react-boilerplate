import { ImiCardWithImageContent } from "@/components/imiCardWithImageContent";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiTab } from "@/components/imiTab";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import {
    IHomePageHealthHubTab,
    homePageHealthHubCardList,
    homePageHealthHubTabItems,
} from "./homePageConstant";

export const HomePageHealthHubSection = () => {
    const t = i18nHelper("home-page");

    const [activeTab, setActiveTab] = useState<IHomePageHealthHubTab>(
        homePageHealthHubTabItems[0].value
    );

    return (
        <ContainerX>
            <SectionContainerY>
                <ImiDescSection
                    header={t("healthHub.header")}
                    desc={[t("healthHub.desc")]}
                    customFullWidthBottomComponent={
                        <div className="tab-container">
                            <ImiTab<IHomePageHealthHubTab>
                                options={homePageHealthHubTabItems.map(
                                    (tab) => ({ ...tab, text: t(tab.text) })
                                )}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                            <div className="health-hub-card-grid-container">
                                {homePageHealthHubCardList[activeTab].map(
                                    (card, i) => (
                                        <ImiCardWithImageContent
                                            key={`health-hub-card-${i}`}
                                            imgUrl={card.imgUrl}
                                            date={t(card.date)}
                                            title={t(card.title)}
                                            desc={t(card.desc)}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    }
                />
            </SectionContainerY>
        </ContainerX>
    );
};
