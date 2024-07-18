import { Images } from "@/assets/images";
import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiGradientBanner } from "@/components/imiGradientBanner";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_homePage.scss";

export const HomePageProductSection = () => {
    const t = i18nHelper("home-page");

    return (
        <ImiDescSection
            header={t("product.header")}
            desc={[t("product.desc")]}
            customFullWidthBottomComponent={
                <ContainerX>
                    <div className="custom-bottom-container">
                        <ImiGradientBanner
                            colorTheme={"primary"}
                            imgUrl={Images.ImageHomePageGradientBanner1}
                            contentCards={[
                                <div className="swiper-column">
                                    <div className="header-column">
                                        <h1 className="header">
                                            {t(
                                                "product.gradientBanner1.header"
                                            ).toUpperCase()}
                                        </h1>
                                        <h3 className="subheader">
                                            {t(
                                                "product.gradientBanner1.subheader"
                                            )?.toUpperCase()}
                                        </h3>
                                    </div>
                                    <div className="detail-column">
                                        <span className="desc-text">
                                            {t("product.gradientBanner1.desc")}
                                        </span>
                                    </div>
                                    <ImiButton
                                        text={t(
                                            "product.gradientBanner1.linkText"
                                        )}
                                        type={"outline"}
                                        colorTheme={"white"}
                                    />
                                </div>,
                                <div className="swiper-column">
                                    <div className="header-column">
                                        <h1 className="header">
                                            {t(
                                                "product.gradientBanner1.header"
                                            ).toUpperCase()}
                                        </h1>
                                        <h3 className="subheader">
                                            {t(
                                                "product.gradientBanner1.subheader"
                                            )?.toUpperCase()}
                                        </h3>
                                    </div>
                                    <div className="detail-column">
                                        <span className="desc-text">
                                            {t("product.gradientBanner1.desc")}
                                        </span>
                                    </div>
                                    <ImiButton
                                        text={t(
                                            "product.gradientBanner1.linkText"
                                        )}
                                        type={"outline"}
                                        colorTheme={"white"}
                                    />
                                </div>,
                            ]}
                        />
                    </div>
                </ContainerX>
            }
        />
    );
};
