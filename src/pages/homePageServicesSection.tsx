import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import { homePageServicesCardList } from "./homePageConstant";
import { HomePageServicesCard } from "./homePageServicesCard";

export const HomePageServicesSection = () => {
    const t = i18nHelper("home-page");

    return (
        <ContainerX>
            <SectionContainerY>
                <div className="service-card-grid-container">
                    {homePageServicesCardList.map((cardItem, i) => (
                        <HomePageServicesCard
                            key={`service-card-${i}`}
                            imgUrl={cardItem.imgUrl}
                            title={t(cardItem.title)}
                            desc={t(cardItem.desc)}
                            button={{
                                ...cardItem.button,
                                text: t(cardItem.button.text),
                            }}
                        />
                    ))}
                </div>
            </SectionContainerY>
        </ContainerX>
    );
};
