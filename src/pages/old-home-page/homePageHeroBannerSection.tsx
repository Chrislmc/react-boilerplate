import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { Swiper } from "@/components/molecules/swiper";
import { i18nHelper } from "@/utils/i18n-helper";
import { useNavigate } from "react-router-dom";
import "./_home-page.scss";
import {
    homePageHeroBannerRibbonItems,
    homePageSwiperCardLists,
} from "./homePageConstant";

export const HomePageHeroBannerSection = () => {
    const t = i18nHelper("old-home-page");
    const navigator = useNavigate();

    return (
        <>
            <div className="hero-banner-container">
                <Swiper
                    cardLists={homePageSwiperCardLists}
                    pagination={{ clickable: true }}
                    navigation
                    speed={1000}
                />
            </div>
            <div className="hero-banner-ribbon">
                <ContainerX>
                    <div className="hero-banner-ribbon-container">
                        {homePageHeroBannerRibbonItems.map((item, i) => (
                            <button
                                key={`ribbon-item-${i}`}
                                className="ribbon-item"
                                onClick={() => navigator(item.link)}
                            >
                                <img src={item.imgUrl} />
                                <span>{t(item.desc)}</span>
                            </button>
                        ))}
                    </div>
                </ContainerX>
            </div>
            <div className="hero-banner-testimonial">
                <SectionContainerY>
                    <ContainerX>
                        <h3 className="hero-banner-testimonial-text">
                            {t("hero-banner.testimonial.desc1")}
                        </h3>
                        <h3 className="hero-banner-testimonial-text">
                            {t("hero-banner.testimonial.desc2")}
                        </h3>
                        <h3 className="hero-banner-testimonial-text">
                            {t("hero-banner.testimonial.desc3")}
                        </h3>
                    </ContainerX>
                </SectionContainerY>
            </div>
        </>
    );
};
