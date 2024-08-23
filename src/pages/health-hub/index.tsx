import { ImiArticleCard } from "@/components/imiArticleCard";
import { IOption } from "@/components/imiCheckBox";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiInput } from "@/components/imiInput";
import { ImiSection } from "@/components/imiSection";
import { ImiSelect } from "@/components/imiSelect";
import { ImiTab } from "@/components/imiTab";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { IArticle } from "@/utils/types/article";
import { useRef, useState } from "react";
import "./_health-hub.scss";
import {
    healthHubArticleList,
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
                                        allOption={translatedFilterOption[0]}
                                        selectedOption={selectedOption}
                                        setSelectedOption={setSelectedOption}
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
                                        (id, i) => {
                                            const card =
                                                healthHubArticleList.find(
                                                    (article) =>
                                                        article.id === id
                                                ) as IArticle;

                                            return (
                                                <ImiArticleCard
                                                    key={`health-hub-card-${i}`}
                                                    id={card.id}
                                                    imgUrl={card.imgUrl}
                                                    date={t(card.date)}
                                                    title={t(card.title)}
                                                    desc={t(card.desc)}
                                                />
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        }
                    />
                </ContainerX>
            </ImiSection>
        </div>
    );
};
