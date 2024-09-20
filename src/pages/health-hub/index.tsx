import { ArticleCard } from "@/components/articleCard";
import { Input } from "@/components/atoms/input";
import { Tab } from "@/components/atoms/tab";
import { DescSection } from "@/components/descSection";
import { ContainerX } from "@/components/layout/containerX";
import { IOption } from "@/components/molecules/checkBox";
import { Select } from "@/components/molecules/select";
import { Section } from "@/components/section";
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
            <Section className="health-hub-page-desc-section">
                <ContainerX>
                    <DescSection
                        header={t("healthHub.header")}
                        desc={[t("healthHub.desc")]}
                        customFullWidthBottomComponent={
                            <div className="tab-container">
                                <Tab<IHealthHubPageTab>
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
                                    <Select<IHealthNeedsType>
                                        options={translatedFilterOption}
                                        defaultOption={
                                            translatedFilterOption[0]
                                        }
                                        allOption={translatedFilterOption[0]}
                                        selectedOption={selectedOption}
                                        setSelectedOption={setSelectedOption}
                                        setInTransition={setInTransition}
                                    />
                                    <Input
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
                                                <ArticleCard
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
            </Section>
        </div>
    );
};
