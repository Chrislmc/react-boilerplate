import { ImiArticleCard } from "@/components/imiArticleCard";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSection } from "@/components/imiSection";
import { ImiTab } from "@/components/imiTab";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import { useRef, useState } from "react";

import { IOption } from "@/components/imiCheckBox";
import { ImiInput } from "@/components/imiInput";
import { ImiSelect } from "@/components/imiSelect";
import "./_health-hub.scss";
import {
    HealthHubPageCardList,
    healthHubPageTabItems,
    healthNeedPageFilterOption,
    IHealthHubPageTab,
    IHealthNeedsType,
} from "./healthHubPageConstant";

export const HealthHubPage = () => {
    const healthHubCardContainer = useRef<HTMLDivElement>(null);
    const t = i18nHelper("health-hub");

    const [activeTab, setActiveTab] = useState<IHealthHubPageTab>(
        healthHubPageTabItems[0].value
    );
    const [inTransition, setInTransition] = useState(false);

    const translatedFilterOption = healthNeedPageFilterOption.map((option) => ({
        ...option,
        text: t(option.text),
    }));

    const [searchString, setSearchString] = useState<string>("");

    const [selectedOption, setSelectedOption] = useState<
        IOption<IHealthNeedsType>[]
    >([translatedFilterOption[0]]);

    const onTabClick = (value: IHealthHubPageTab) => {
        setInTransition(true);
        setTimeout(() => {
            setActiveTab(value);
            setInTransition(false);
        }, 500);
    };
    return (
        <div id="health-hub-page">
            <ImiSection className="health-hub-page-desc-section">
                <ContainerX>
                    <SectionContainerY>
                        <ImiDescSection
                            header={t("healthHub.header")}
                            desc={[t("healthHub.desc")]}
                            customFullWidthBottomComponent={
                                <div className="tab-container">
                                    <ImiTab<IHealthHubPageTab>
                                        options={healthHubPageTabItems.map(
                                            (tab) => ({
                                                ...tab,
                                                text: t(tab.text),
                                            })
                                        )}
                                        activeTab={activeTab}
                                        setActiveTab={setActiveTab}
                                        onTabClick={onTabClick}
                                        disabled={inTransition}
                                    />

                                    <div className="control-container">
                                        <ImiSelect<IHealthNeedsType>
                                            options={translatedFilterOption}
                                            defaultOption={
                                                translatedFilterOption[0]
                                            }
                                            allOption={
                                                translatedFilterOption[0]
                                            }
                                            selectedOption={selectedOption}
                                            setSelectedOption={
                                                setSelectedOption
                                            }
                                            setInTransition={setInTransition}
                                        />
                                        <ImiInput
                                            placeholder={"input.searchByName"}
                                            value={searchString}
                                            setValue={setSearchString}
                                        />
                                    </div>

                                    <div
                                        className={`health-hub-card-grid-container${
                                            inTransition
                                                ? " mod__in-transition"
                                                : ""
                                        }`}
                                        ref={healthHubCardContainer}
                                    >
                                        {HealthHubPageCardList[activeTab].map(
                                            (card, i) => (
                                                <ImiArticleCard
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
            </ImiSection>
        </div>
    );
};
