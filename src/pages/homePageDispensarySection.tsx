import { Images } from "@/assets/images";
import { ImiGradientBanner } from "@/components/imiGradientBanner";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_home-page.scss";

export const HomePageDispensarySection = () => {
    const t = i18nHelper("home-page");

    return (
        <ImiGradientBanner
            colorTheme={"any"}
            content={[
                {
                    header: t("dispensary.header"),
                    descList: [t("dispensary.desc")],
                    button: {
                        text: t("dispensary.linkText"),
                        colorTheme: "orange",
                        textClassName: "mod__hover-blueish-green",
                        size: "padding",
                    },
                },
            ]}
            imgUrl={Images.HomePageDispensary}
        />
    );
};
