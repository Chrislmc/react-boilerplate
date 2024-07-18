import { ImiCardWithImageCard } from "@/components/imiCardWithImageContent";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import { homePageServicesCardList } from "./homePageConstant";

export const HomePageServicesSection = () => {
    const t = i18nHelper("home-page");

    return (
        <ContainerX>
            <SectionContainerY>
                <div className="service-card-grid-container">
                    {homePageServicesCardList.map((cardItem, i) => (
                        <ImiCardWithImageCard
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
