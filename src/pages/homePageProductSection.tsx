import { Images } from "@/assets/images";
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
                            header={t("product.gradientBanner1.header")}
                            subheader={t("product.gradientBanner1.subheader")}
                            descList={[t("product.gradientBanner1.desc")]}
                            button={{
                                text: t("product.gradientBanner1.linkText"),
                                type: "outline",
                                colorTheme: "white",
                            }}
                        />
                    </div>
                </ContainerX>
            }
        />
    );
};
