import { ArticleCard } from "@/components/articleCard";
import { Tab } from "@/components/atoms/tab";
import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { IArticle } from "@/utils/types/article";
import { useRef, useState } from "react";
import {
    IHomePageHealthHubTab,
    homePageArticleList,
    homePageHealthHubCardList,
    homePageHealthHubTabItems,
} from "./homePageConstant";

export const HomePageHealthHubSection = () => {
    const healthHubCardContainer = useRef<HTMLDivElement>(null);
    const t = i18nHelper("home-page");

    const [activeTab, setActiveTab] = useState<IHomePageHealthHubTab>(
        homePageHealthHubTabItems[0].value
    );
    const [inTransition, setInTransition] = useState(false);

    const onTabClick = (value: IHomePageHealthHubTab) => {
        setInTransition(true);
        setTimeout(() => {
            setActiveTab(value);
            setInTransition(false);
        }, 500);
    };

    return (
        <DescSection
            header={t("healthHub.header")}
            desc={[t("healthHub.desc")]}
            customBottomComponent={
                <div className="tab-container">
                    <Tab<IHomePageHealthHubTab>
                        options={homePageHealthHubTabItems.map((tab) => ({
                            ...tab,
                            text: t(tab.text),
                        }))}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        onTabClick={onTabClick}
                        disabled={inTransition}
                    />
                    <div
                        className={`health-hub-card-grid-container${
                            inTransition ? " mod__in-transition" : ""
                        }`}
                        ref={healthHubCardContainer}
                    >
                        {homePageHealthHubCardList[activeTab].map((id, i) => {
                            const card = homePageArticleList.find(
                                (article) => article.id === id
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
                        })}
                    </div>
                </div>
            }
        />
    );
};
